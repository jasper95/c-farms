import * as Types from '@/shared/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type HouseHoldListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.HouseholdBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.HouseholdOrderBy> | Types.HouseholdOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type HouseHoldListQuery = {
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

export const HouseHoldListDocument = gql`
  query HouseHoldList(
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

export function useHouseHoldListQuery(
  options?: Omit<Urql.UseQueryArgs<HouseHoldListQueryVariables>, 'query'>
) {
  return Urql.useQuery<HouseHoldListQuery>({
    query: HouseHoldListDocument,
    ...options,
  })
}
