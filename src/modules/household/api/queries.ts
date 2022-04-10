import * as Types from '@/shared/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type HouseHoldListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.Farm_Household_Bool_Exp>
  order_by?: Types.InputMaybe<
    Array<Types.Farm_Household_Order_By> | Types.Farm_Household_Order_By
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type HouseHoldListQuery = {
  __typename?: 'query_root'
  result: Array<{
    __typename?: 'farm_household'
    fname: string
    id: number
    lname: string
    mname?: string | null | undefined
    reference_no: string
    barangay?: string | null | undefined
  }>
  pagination: {
    __typename?: 'farm_household_aggregate'
    aggregate?:
      | { __typename?: 'farm_household_aggregate_fields'; count: number }
      | null
      | undefined
  }
}

export const HouseHoldListDocument = gql`
  query HouseHoldList(
    $where: farm_household_bool_exp
    $order_by: [farm_household_order_by!]
    $offset: Int
    $limit: Int
  ) {
    result: farm_household(
      where: $where
      offset: $offset
      order_by: $order_by
      limit: $limit
    ) {
      fname
      id
      lname
      mname
      reference_no
      barangay
    }
    pagination: farm_household_aggregate(where: $where) {
      aggregate {
        count
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
