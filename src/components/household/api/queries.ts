import * as Types from '@/shared/generated/graphql.types'

import { useQuery, UseQueryOptions } from 'react-query'
import { fetcher } from '@/shared/fetcher'
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
  farm_household: Array<{
    __typename?: 'farm_household'
    fname: string
    id: number
    lname: string
    mname?: string | null | undefined
    reference_no: string
  }>
}

export const HouseHoldListDocument = `
    query HouseHoldList($where: farm_household_bool_exp, $order_by: [farm_household_order_by!], $offset: Int, $limit: Int) {
  farm_household(where: $where, offset: $offset, order_by: $order_by) {
    fname
    id
    lname
    mname
    reference_no
  }
}
    `
export const useHouseHoldListQuery = <
  TData = HouseHoldListQuery,
  TError = unknown
>(
  variables?: HouseHoldListQueryVariables,
  options?: UseQueryOptions<HouseHoldListQuery, TError, TData>
) =>
  useQuery<HouseHoldListQuery, TError, TData>(
    variables === undefined ? ['HouseHoldList'] : ['HouseHoldList', variables],
    fetcher<HouseHoldListQuery, HouseHoldListQueryVariables>(
      HouseHoldListDocument
    ).bind(null, variables),
    options
  )
