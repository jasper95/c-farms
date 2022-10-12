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
    name: string
    commodityType: string
  }>
}

export type CommodityProduceListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.CommodityProduceBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.CommodityProduceOrderBy> | Types.CommodityProduceOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type CommodityProduceListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'CommodityProduce'
    id: any
    areaUsed: any
    organicPractitioner: boolean
    produce?: any | null | undefined
    year: number
  }>
  meta: {
    __typename?: 'CommodityProduceAggregate'
    aggregate?:
      | { __typename?: 'CommodityProduceAggregateFields'; count: number }
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
      name
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
export const CommodityProduceListDocument = gql`
  query CommodityProduceList(
    $where: CommodityProduceBoolExp
    $orderBy: [CommodityProduceOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: commodityProduce(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      areaUsed
      organicPractitioner
      produce
      year
    }
    meta: commodityProduceAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useCommodityProduceListQuery(
  options?: Omit<Urql.UseQueryArgs<CommodityProduceListQueryVariables>, 'query'>
) {
  return Urql.useQuery<CommodityProduceListQuery>({
    query: CommodityProduceListDocument,
    ...options,
  })
}
