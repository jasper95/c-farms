import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type ProgramListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProgramBoolExp>
  orderBy?: Types.InputMaybe<Array<Types.ProgramOrderBy> | Types.ProgramOrderBy>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type ProgramListQuery = {
  __typename?: 'query_root'
  list: Array<{ __typename?: 'Program'; id: any; name: string; type: string }>
  meta: {
    __typename?: 'ProgramAggregate'
    aggregate?:
      | { __typename?: 'ProgramAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type ProgramDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type ProgramDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'Program'
        id: any
        name: string
        type: string
        sponsoringAgency: string
        description: string
        dateStart: any
        dateEnd?: any | null | undefined
      }
    | null
    | undefined
}

export type ProgramBeneficiariesListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProgramBeneficiariesBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.ProgramBeneficiariesOrderBy> | Types.ProgramBeneficiariesOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type ProgramBeneficiariesListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'ProgramBeneficiaries'
    createdAt: any
    farmSize: any
    firstName: string
    grossAnnualIncomeFarming: any
    grossAnnualIncomeNonfarming: any
    householdId: any
    id: any
    lastName: string
    programId: any
    barangay: string
    referenceNo: string
  }>
  meta: {
    __typename?: 'ProgramBeneficiariesAggregate'
    aggregate?:
      | { __typename?: 'ProgramBeneficiariesAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type HouseholdProgramsListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.HouseholdProgramsBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.HouseholdProgramsOrderBy> | Types.HouseholdProgramsOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type HouseholdProgramsListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'HouseholdPrograms'
    barangay: string
    farmSize: any
    firstName: string
    grossAnnualIncomeFarming: any
    grossAnnualIncomeNonfarming: any
    id: any
    lastName: string
    programIds: any
    referenceNo: string
  }>
  meta: {
    __typename?: 'HouseholdProgramsAggregate'
    aggregate?:
      | { __typename?: 'HouseholdProgramsAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type AssociationProgramsListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.AssociationProgramsBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.AssociationProgramsOrderBy> | Types.AssociationProgramsOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type AssociationProgramsListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'AssociationPrograms'
    active: boolean
    id: any
    name: string
    programIds: any
  }>
  meta: {
    __typename?: 'AssociationProgramsAggregate'
    aggregate?:
      | { __typename?: 'AssociationProgramsAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type AssociationBeneficiariesListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.AssociationBeneficiariesBoolExp>
  orderBy?: Types.InputMaybe<
    | Array<Types.AssociationBeneficiariesOrderBy>
    | Types.AssociationBeneficiariesOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type AssociationBeneficiariesListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'AssociationBeneficiaries'
    createdAt: any
    id: any
    name: string
    programId?: any | null | undefined
    active: boolean
    associationId: any
  }>
  meta: {
    __typename?: 'AssociationBeneficiariesAggregate'
    aggregate?:
      | {
          __typename?: 'AssociationBeneficiariesAggregateFields'
          count: number
        }
      | null
      | undefined
  }
}

export const ProgramListDocument = gql`
  query ProgramList(
    $where: ProgramBoolExp
    $orderBy: [ProgramOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: program(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      name
      type
    }
    meta: programAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useProgramListQuery(
  options?: Omit<Urql.UseQueryArgs<ProgramListQueryVariables>, 'query'>
) {
  return Urql.useQuery<ProgramListQuery>({
    query: ProgramListDocument,
    ...options,
  })
}
export const ProgramDetailsDocument = gql`
  query ProgramDetails($id: uuid!) {
    details: programByPk(id: $id) {
      id
      name
      type
      sponsoringAgency
      description
      dateStart
      dateEnd
    }
  }
`

export function useProgramDetailsQuery(
  options: Omit<Urql.UseQueryArgs<ProgramDetailsQueryVariables>, 'query'>
) {
  return Urql.useQuery<ProgramDetailsQuery>({
    query: ProgramDetailsDocument,
    ...options,
  })
}
export const ProgramBeneficiariesListDocument = gql`
  query ProgramBeneficiariesList(
    $where: ProgramBeneficiariesBoolExp
    $orderBy: [ProgramBeneficiariesOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: programBeneficiaries(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      createdAt
      farmSize
      firstName
      grossAnnualIncomeFarming
      grossAnnualIncomeNonfarming
      householdId
      id
      lastName
      programId
      barangay
      referenceNo
    }
    meta: programBeneficiariesAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useProgramBeneficiariesListQuery(
  options?: Omit<
    Urql.UseQueryArgs<ProgramBeneficiariesListQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<ProgramBeneficiariesListQuery>({
    query: ProgramBeneficiariesListDocument,
    ...options,
  })
}
export const HouseholdProgramsListDocument = gql`
  query HouseholdProgramsList(
    $where: HouseholdProgramsBoolExp
    $orderBy: [HouseholdProgramsOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: householdPrograms(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      barangay
      farmSize
      firstName
      grossAnnualIncomeFarming
      grossAnnualIncomeNonfarming
      id
      lastName
      programIds
      referenceNo
    }
    meta: householdProgramsAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useHouseholdProgramsListQuery(
  options?: Omit<
    Urql.UseQueryArgs<HouseholdProgramsListQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<HouseholdProgramsListQuery>({
    query: HouseholdProgramsListDocument,
    ...options,
  })
}
export const AssociationProgramsListDocument = gql`
  query AssociationProgramsList(
    $where: AssociationProgramsBoolExp
    $orderBy: [AssociationProgramsOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: associationPrograms(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      active
      id
      name
      programIds
    }
    meta: associationProgramsAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useAssociationProgramsListQuery(
  options?: Omit<
    Urql.UseQueryArgs<AssociationProgramsListQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<AssociationProgramsListQuery>({
    query: AssociationProgramsListDocument,
    ...options,
  })
}
export const AssociationBeneficiariesListDocument = gql`
  query AssociationBeneficiariesList(
    $where: AssociationBeneficiariesBoolExp
    $orderBy: [AssociationBeneficiariesOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: associationBeneficiaries(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      createdAt
      id
      name
      programId
      active
      associationId
    }
    meta: associationBeneficiariesAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useAssociationBeneficiariesListQuery(
  options?: Omit<
    Urql.UseQueryArgs<AssociationBeneficiariesListQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<AssociationBeneficiariesListQuery>({
    query: AssociationBeneficiariesListDocument,
    ...options,
  })
}
