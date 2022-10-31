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
    unit?: string | null | undefined
    conversionFactor?: any | null | undefined
  }>
}

export type FarmOptionsQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.FarmBoolExp>
  orderBy?: Types.InputMaybe<Array<Types.FarmOrderBy> | Types.FarmOrderBy>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type FarmOptionsQuery = {
  __typename?: 'query_root'
  list: Array<{ __typename?: 'Farm'; id: any; name: string }>
}

export type CommodityProduceListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProduceBoolExp>
  orderBy?: Types.InputMaybe<Array<Types.ProduceOrderBy> | Types.ProduceOrderBy>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type CommodityProduceListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'Produce'
    id: any
    areaUsed: any
    commodityName: string
    createdAt: any
    farmName: string
    organicPractitioner: boolean
    produce: any
    year: number
    commodityType: string
    householdName?: string | null | undefined
    produceInUnit: any
    unit: string
  }>
  meta: {
    __typename?: 'ProduceAggregate'
    aggregate?:
      | { __typename?: 'ProduceAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type CommodityProduceDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type CommodityProduceDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'CommodityProduce'
        id: any
        commodityId: any
        farmId: any
        produce?: any | null | undefined
        organicPractitioner: boolean
        householdId: any
        year: number
        areaUsed: any
        produceInUnit?: any | null | undefined
        unit: string
      }
    | null
    | undefined
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
      unit
      conversionFactor
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
export const FarmOptionsDocument = gql`
  query FarmOptions(
    $where: FarmBoolExp
    $orderBy: [FarmOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: farm(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      name
    }
  }
`

export function useFarmOptionsQuery(
  options?: Omit<Urql.UseQueryArgs<FarmOptionsQueryVariables>, 'query'>
) {
  return Urql.useQuery<FarmOptionsQuery>({
    query: FarmOptionsDocument,
    ...options,
  })
}
export const CommodityProduceListDocument = gql`
  query CommodityProduceList(
    $where: ProduceBoolExp
    $orderBy: [ProduceOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: produce(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      areaUsed
      commodityName
      createdAt
      farmName
      organicPractitioner
      produce
      year
      commodityType
      householdName
      produceInUnit
      unit
    }
    meta: produceAggregate(where: $where) {
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
export const CommodityProduceDetailsDocument = gql`
  query CommodityProduceDetails($id: uuid!) {
    details: commodityProduceByPk(id: $id) {
      id
      commodityId
      farmId
      produce
      organicPractitioner
      householdId
      year
      areaUsed
      produceInUnit
      unit
    }
  }
`

export function useCommodityProduceDetailsQuery(
  options: Omit<
    Urql.UseQueryArgs<CommodityProduceDetailsQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<CommodityProduceDetailsQuery>({
    query: CommodityProduceDetailsDocument,
    ...options,
  })
}
