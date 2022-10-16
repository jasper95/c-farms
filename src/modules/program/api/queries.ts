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

export type HouseholdBenificiariesListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.HouseholdBeneficiariesBoolExp>
  orderBy?: Types.InputMaybe<
    | Array<Types.HouseholdBeneficiariesOrderBy>
    | Types.HouseholdBeneficiariesOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type HouseholdBenificiariesListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'HouseholdBeneficiaries'
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
    __typename?: 'HouseholdBeneficiariesAggregate'
    aggregate?:
      | { __typename?: 'HouseholdBeneficiariesAggregateFields'; count: number }
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
export const HouseholdBenificiariesListDocument = gql`
  query HouseholdBenificiariesList(
    $where: HouseholdBeneficiariesBoolExp
    $orderBy: [HouseholdBeneficiariesOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: householdBeneficiaries(
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
    meta: householdBeneficiariesAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useHouseholdBenificiariesListQuery(
  options?: Omit<
    Urql.UseQueryArgs<HouseholdBenificiariesListQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<HouseholdBenificiariesListQuery>({
    query: HouseholdBenificiariesListDocument,
    ...options,
  })
}
