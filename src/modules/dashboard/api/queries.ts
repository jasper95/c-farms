import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type AverageAnnualIncomeListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.AverageAnnualIncomeBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.AverageAnnualIncomeOrderBy> | Types.AverageAnnualIncomeOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type AverageAnnualIncomeListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'AverageAnnualIncome'
    year: number
    annualIncomeFarming?: any | null | undefined
    annualIncomeNonfarming?: any | null | undefined
    averageinfo: any
  }>
}

export type DashboardStatsQueryVariables = Types.Exact<{ [key: string]: never }>

export type DashboardStatsQuery = {
  __typename?: 'query_root'
  farms: {
    __typename?: 'FarmAggregate'
    aggregate?:
      | { __typename?: 'FarmAggregateFields'; count: number }
      | null
      | undefined
  }
  associations: {
    __typename?: 'AssociationAggregate'
    aggregate?:
      | { __typename?: 'AssociationAggregateFields'; count: number }
      | null
      | undefined
  }
  households: {
    __typename?: 'HouseholdAggregate'
    aggregate?:
      | { __typename?: 'HouseholdAggregateFields'; count: number }
      | null
      | undefined
  }
  programs: {
    __typename?: 'ProgramAggregate'
    aggregate?:
      | { __typename?: 'ProgramAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type InventoryOfLivestockListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.InventoryOfLivestockBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.InventoryOfLivestockOrderBy> | Types.InventoryOfLivestockOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type InventoryOfLivestockListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'InventoryOfLivestock'
    year: number
    name: string
    sum?: any | null | undefined
    commodityId?: any | null | undefined
  }>
}

export type CropProduceListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.CropProduceBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.CropProduceOrderBy> | Types.CropProduceOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type CropProduceListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'CropProduce'
    year: number
    name: string
    produce: any
    commodityId?: any | null | undefined
    yield: any
    areaUsed?: any | null | undefined
  }>
}

export type RegisteredHouseholdQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.RegisteredHouseholdPerYearBoolExp>
  orderBy?: Types.InputMaybe<
    | Array<Types.RegisteredHouseholdPerYearOrderBy>
    | Types.RegisteredHouseholdPerYearOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type RegisteredHouseholdQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'RegisteredHouseholdPerYear'
    year?: number | null | undefined
    count?: any | null | undefined
  }>
}

export type FisheriesProduceListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.FisheriesProduceBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.FisheriesProduceOrderBy> | Types.FisheriesProduceOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type FisheriesProduceListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'FisheriesProduce'
    year: number
    name: string
    produce: any
    commodityId?: any | null | undefined
  }>
}

export const AverageAnnualIncomeListDocument = gql`
  query AverageAnnualIncomeList(
    $where: AverageAnnualIncomeBoolExp
    $orderBy: [AverageAnnualIncomeOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: averageAnnualIncome(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      year
      annualIncomeFarming
      annualIncomeNonfarming
      averageinfo
    }
  }
`

export function useAverageAnnualIncomeListQuery(
  options?: Omit<
    Urql.UseQueryArgs<AverageAnnualIncomeListQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<
    AverageAnnualIncomeListQuery,
    AverageAnnualIncomeListQueryVariables
  >({ query: AverageAnnualIncomeListDocument, ...options })
}
export const DashboardStatsDocument = gql`
  query DashboardStats {
    farms: farmAggregate {
      aggregate {
        count
      }
    }
    associations: associationAggregate {
      aggregate {
        count
      }
    }
    households: householdAggregate {
      aggregate {
        count
      }
    }
    programs: programAggregate {
      aggregate {
        count
      }
    }
  }
`

export function useDashboardStatsQuery(
  options?: Omit<Urql.UseQueryArgs<DashboardStatsQueryVariables>, 'query'>
) {
  return Urql.useQuery<DashboardStatsQuery, DashboardStatsQueryVariables>({
    query: DashboardStatsDocument,
    ...options,
  })
}
export const InventoryOfLivestockListDocument = gql`
  query InventoryOfLivestockList(
    $where: InventoryOfLivestockBoolExp
    $orderBy: [InventoryOfLivestockOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: inventoryOfLivestock(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      year
      name
      sum
      commodityId
    }
  }
`

export function useInventoryOfLivestockListQuery(
  options?: Omit<
    Urql.UseQueryArgs<InventoryOfLivestockListQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<
    InventoryOfLivestockListQuery,
    InventoryOfLivestockListQueryVariables
  >({ query: InventoryOfLivestockListDocument, ...options })
}
export const CropProduceListDocument = gql`
  query CropProduceList(
    $where: CropProduceBoolExp
    $orderBy: [CropProduceOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: cropProduce(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      year
      name
      produce
      commodityId
      yield
      areaUsed
    }
  }
`

export function useCropProduceListQuery(
  options?: Omit<Urql.UseQueryArgs<CropProduceListQueryVariables>, 'query'>
) {
  return Urql.useQuery<CropProduceListQuery, CropProduceListQueryVariables>({
    query: CropProduceListDocument,
    ...options,
  })
}
export const RegisteredHouseholdDocument = gql`
  query RegisteredHousehold(
    $where: RegisteredHouseholdPerYearBoolExp
    $orderBy: [RegisteredHouseholdPerYearOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: registeredHouseholdPerYear(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      year
      count
    }
  }
`

export function useRegisteredHouseholdQuery(
  options?: Omit<Urql.UseQueryArgs<RegisteredHouseholdQueryVariables>, 'query'>
) {
  return Urql.useQuery<
    RegisteredHouseholdQuery,
    RegisteredHouseholdQueryVariables
  >({ query: RegisteredHouseholdDocument, ...options })
}
export const FisheriesProduceListDocument = gql`
  query FisheriesProduceList(
    $where: FisheriesProduceBoolExp
    $orderBy: [FisheriesProduceOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: fisheriesProduce(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      year
      name
      produce
      commodityId
    }
  }
`

export function useFisheriesProduceListQuery(
  options?: Omit<Urql.UseQueryArgs<FisheriesProduceListQueryVariables>, 'query'>
) {
  return Urql.useQuery<
    FisheriesProduceListQuery,
    FisheriesProduceListQueryVariables
  >({ query: FisheriesProduceListDocument, ...options })
}
