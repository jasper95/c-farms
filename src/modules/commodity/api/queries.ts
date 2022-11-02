import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type CommodityListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.CommodityBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.CommodityOrderBy> | Types.CommodityOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type CommodityListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'Commodity'
    id: any
    name: string
    commodityType: string
    unit?: string | null | undefined
  }>
  meta: {
    __typename?: 'CommodityAggregate'
    aggregate?:
      | { __typename?: 'CommodityAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type CommodityDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type CommodityDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'Commodity'
        id: any
        name: string
        commodityType: string
        unit?: string | null | undefined
        conversionFactor?: any | null | undefined
      }
    | null
    | undefined
}

export const CommodityListDocument = gql`
  query CommodityList(
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
      unit
    }
    meta: commodityAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useCommodityListQuery(
  options?: Omit<Urql.UseQueryArgs<CommodityListQueryVariables>, 'query'>
) {
  return Urql.useQuery<CommodityListQuery, CommodityListQueryVariables>({
    query: CommodityListDocument,
    ...options,
  })
}
export const CommodityDetailsDocument = gql`
  query CommodityDetails($id: uuid!) {
    details: commodityByPk(id: $id) {
      id
      name
      commodityType
      unit
      conversionFactor
    }
  }
`

export function useCommodityDetailsQuery(
  options: Omit<Urql.UseQueryArgs<CommodityDetailsQueryVariables>, 'query'>
) {
  return Urql.useQuery<CommodityDetailsQuery, CommodityDetailsQueryVariables>({
    query: CommodityDetailsDocument,
    ...options,
  })
}
