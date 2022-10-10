import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type CommodityOptionsQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.CommodityBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.CommodityOrderBy> | Types.CommodityOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type CommodityOptionsQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'Commodity'
    id: any
    commodity: string
    commodityType: string
  }>
}

export type CommodityProduceInventoryListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.CommodityProduceInventoryBoolExp>
  orderBy?: Types.InputMaybe<
    | Array<Types.CommodityProduceInventoryOrderBy>
    | Types.CommodityProduceInventoryOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type CommodityProduceInventoryListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'CommodityProduceInventory'
    id: any
    areaUsed: any
    organicPractitioner: boolean
    produce?: any | null | undefined
    year: number
    commodity: {
      __typename?: 'Commodity'
      commodity: string
      commodityType: string
    }
    farm: { __typename?: 'Farm'; name: string }
  }>
  meta: {
    __typename?: 'CommodityProduceInventoryAggregate'
    aggregate?:
      | {
          __typename?: 'CommodityProduceInventoryAggregateFields'
          count: number
        }
      | null
      | undefined
  }
}

export const CommodityOptionsDocument = gql`
  query CommodityOptions(
    $where: CommodityBoolExp
    $orderBy: [CommodityOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: commodity(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      commodity
      commodityType
    }
  }
`

export function useCommodityOptionsQuery(
  options?: Omit<Urql.UseQueryArgs<CommodityOptionsQueryVariables>, 'query'>
) {
  return Urql.useQuery<CommodityOptionsQuery>({
    query: CommodityOptionsDocument,
    ...options,
  })
}
export const CommodityProduceInventoryListDocument = gql`
  query CommodityProduceInventoryList(
    $where: CommodityProduceInventoryBoolExp
    $orderBy: [CommodityProduceInventoryOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: commodityProduceInventory(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      areaUsed
      commodity {
        commodity
        commodityType
      }
      farm {
        name
      }
      organicPractitioner
      produce
      year
    }
    meta: commodityProduceInventoryAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useCommodityProduceInventoryListQuery(
  options?: Omit<
    Urql.UseQueryArgs<CommodityProduceInventoryListQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<CommodityProduceInventoryListQuery>({
    query: CommodityProduceInventoryListDocument,
    ...options,
  })
}
