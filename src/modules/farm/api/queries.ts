import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type HouseholdOptionsQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.HouseholdBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.HouseholdOrderBy> | Types.HouseholdOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type HouseholdOptionsQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'Household'
    id: any
    firstName: string
    lastName: string
  }>
}

export type FarmListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.FarmBoolExp>
  orderBy?: Types.InputMaybe<Array<Types.FarmOrderBy> | Types.FarmOrderBy>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type FarmListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'Farm'
    id: any
    location?: any | null | undefined
    name: string
    sizeInHaTotal: any
    ownerName: string
    ownershipType: string
    household: {
      __typename?: 'Household'
      id: any
      firstName: string
      lastName: string
    }
  }>
  meta: {
    __typename?: 'FarmAggregate'
    aggregate?:
      | { __typename?: 'FarmAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type FarmDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type FarmDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'Farm'
        id: any
        ownerName: string
        ownershipDocument: string
        ownershipType: string
        name: string
        barangay: string
        municipality: string
        farmType: string
        sizeInHaTotal: any
        isAgrarianReformBeneficiary: boolean
        withinAncestralDomain: boolean
        location?: any | null | undefined
        householdId: any
      }
    | null
    | undefined
}

export type FarmViewListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.FarmViewBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.FarmViewOrderBy> | Types.FarmViewOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type FarmViewListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'FarmView'
    id: any
    name: string
    firstName: string
    lastName: string
    sizeInHaTotal: any
    ownerName: string
    ownershipType: string
    createdAt: any
    location: any
    householdId: any
  }>
  meta: {
    __typename?: 'FarmViewAggregate'
    aggregate?:
      | { __typename?: 'FarmViewAggregateFields'; count: number }
      | null
      | undefined
  }
}

export const HouseholdOptionsDocument = gql`
  query HouseholdOptions(
    $where: HouseholdBoolExp
    $orderBy: [HouseholdOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: household(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      firstName
      lastName
    }
  }
`

export function useHouseholdOptionsQuery(
  options?: Omit<Urql.UseQueryArgs<HouseholdOptionsQueryVariables>, 'query'>
) {
  return Urql.useQuery<HouseholdOptionsQuery, HouseholdOptionsQueryVariables>({
    query: HouseholdOptionsDocument,
    ...options,
  })
}
export const FarmListDocument = gql`
  query FarmList(
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
      location
      name
      household {
        id
        firstName
        lastName
      }
      sizeInHaTotal
      ownerName
      ownershipType
    }
    meta: farmAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useFarmListQuery(
  options?: Omit<Urql.UseQueryArgs<FarmListQueryVariables>, 'query'>
) {
  return Urql.useQuery<FarmListQuery, FarmListQueryVariables>({
    query: FarmListDocument,
    ...options,
  })
}
export const FarmDetailsDocument = gql`
  query FarmDetails($id: uuid!) {
    details: farmByPk(id: $id) {
      id
      ownerName
      ownershipDocument
      ownershipType
      name
      barangay
      municipality
      farmType
      sizeInHaTotal
      isAgrarianReformBeneficiary
      withinAncestralDomain
      location
      householdId
    }
  }
`

export function useFarmDetailsQuery(
  options: Omit<Urql.UseQueryArgs<FarmDetailsQueryVariables>, 'query'>
) {
  return Urql.useQuery<FarmDetailsQuery, FarmDetailsQueryVariables>({
    query: FarmDetailsDocument,
    ...options,
  })
}
export const FarmViewListDocument = gql`
  query FarmViewList(
    $where: FarmViewBoolExp
    $orderBy: [FarmViewOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: farmView(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      name
      firstName
      lastName
      sizeInHaTotal
      ownerName
      ownershipType
      createdAt
      location
      householdId
    }
    meta: farmViewAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useFarmViewListQuery(
  options?: Omit<Urql.UseQueryArgs<FarmViewListQueryVariables>, 'query'>
) {
  return Urql.useQuery<FarmViewListQuery, FarmViewListQueryVariables>({
    query: FarmViewListDocument,
    ...options,
  })
}
