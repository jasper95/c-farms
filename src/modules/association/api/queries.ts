import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type AssociationListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.AssociationBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.AssociationOrderBy> | Types.AssociationOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type AssociationListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'Association'
    id: any
    name: string
    shortName: string
    description: string
    active: boolean
  }>
  meta: {
    __typename?: 'AssociationAggregate'
    aggregate?:
      | { __typename?: 'AssociationAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type AssociationDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type AssociationDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'Association'
        id: any
        name: string
        shortName: string
        description: string
        active: boolean
      }
    | null
    | undefined
}

export const AssociationListDocument = gql`
  query AssociationList(
    $where: AssociationBoolExp
    $orderBy: [AssociationOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: association(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      name
      shortName
      description
      active
    }
    meta: associationAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useAssociationListQuery(
  options?: Omit<Urql.UseQueryArgs<AssociationListQueryVariables>, 'query'>
) {
  return Urql.useQuery<AssociationListQuery, AssociationListQueryVariables>({
    query: AssociationListDocument,
    ...options,
  })
}
export const AssociationDetailsDocument = gql`
  query AssociationDetails($id: uuid!) {
    details: associationByPk(id: $id) {
      id
      name
      shortName
      description
      active
    }
  }
`

export function useAssociationDetailsQuery(
  options: Omit<Urql.UseQueryArgs<AssociationDetailsQueryVariables>, 'query'>
) {
  return Urql.useQuery<
    AssociationDetailsQuery,
    AssociationDetailsQueryVariables
  >({ query: AssociationDetailsDocument, ...options })
}
