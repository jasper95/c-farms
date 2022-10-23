import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type UserListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.UserBoolExp>
  orderBy?: Types.InputMaybe<Array<Types.UserOrderBy> | Types.UserOrderBy>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type UserListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'User'
    id: any
    firstName: string
    lastName: string
    username: string
    role: any
    active: boolean
  }>
  meta: {
    __typename?: 'UserAggregate'
    aggregate?:
      | { __typename?: 'UserAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type UserDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type UserDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'User'
        id: any
        firstName: string
        lastName: string
        username: string
        role: any
        active: boolean
      }
    | null
    | undefined
}

export const UserListDocument = gql`
  query UserList(
    $where: UserBoolExp
    $orderBy: [UserOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: user(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      firstName
      lastName
      username
      role
      active
    }
    meta: userAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useUserListQuery(
  options?: Omit<Urql.UseQueryArgs<UserListQueryVariables>, 'query'>
) {
  return Urql.useQuery<UserListQuery>({ query: UserListDocument, ...options })
}
export const UserDetailsDocument = gql`
  query UserDetails($id: uuid!) {
    details: userByPk(id: $id) {
      id
      firstName
      lastName
      username
      role
      active
    }
  }
`

export function useUserDetailsQuery(
  options: Omit<Urql.UseQueryArgs<UserDetailsQueryVariables>, 'query'>
) {
  return Urql.useQuery<UserDetailsQuery>({
    query: UserDetailsDocument,
    ...options,
  })
}