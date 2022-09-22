import * as Types from '@/shared/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type HouseholdListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.HouseholdBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.HouseholdOrderBy> | Types.HouseholdOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type HouseholdListQuery = {
  __typename?: 'query_root'
  householdList: {
    __typename?: 'HouseholdAggregate'
    data: Array<{
      __typename?: 'Household'
      id: any
      lastName: string
      firstName: string
      middleName?: string | null | undefined
      referenceNo: string
      barangay?: string | null | undefined
    }>
    meta?:
      | { __typename?: 'HouseholdAggregateFields'; count: number }
      | null
      | undefined
  }
}

export const HouseholdListDocument = gql`
  query HouseholdList(
    $where: HouseholdBoolExp
    $orderBy: [HouseholdOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    householdList: householdAggregate(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      data: nodes {
        id
        lastName
        firstName
        middleName
        referenceNo
        barangay
      }
      meta: aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`

export function useHouseholdListQuery(
  options?: Omit<Urql.UseQueryArgs<HouseholdListQueryVariables>, 'query'>
) {
  return Urql.useQuery<HouseholdListQuery>({
    query: HouseholdListDocument,
    ...options,
  })
}
