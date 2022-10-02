import * as Types from '@/shared/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type HouseholdListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.HouseholdBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.HouseholdOrderBy> | Types.HouseholdOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type HouseholdListQuery = {
  __typename?: 'query_root'
  householdList: {
    __typename?: 'HouseholdAggregate'
    data: Array<{
      __typename?: 'Household'
      id: any
      lastName: string
      firstName: string
      middleName: string
      referenceNo: string
      barangay: string
    }>
    meta?:
      | { __typename?: 'HouseholdAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type HouseholdDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type HouseholdDetailsQuery = {
  __typename?: 'query_root'
  householdByPk?:
    | {
        __typename?: 'Household'
        id: any
        firstName: string
        lastName: string
        middleName: string
        extensionName: string
        houseLotBldgNo: string
        referenceNo: string
        streetSitioSubdv: string
        barangay: string
        municipality: string
        province: string
        region: string
        contactNumber: string
        sex: number
        civilStatus: number
        nameOfSpouse: string
        mothersMaidenName: string
        religion: string
        dateOfBirth: any
        placeOfBirth: string
      }
    | null
    | undefined
}

export type HouseholdFragmentFragment = {
  __typename?: 'Household'
  id: any
  firstName: string
  lastName: string
  middleName: string
  extensionName: string
  houseLotBldgNo: string
  referenceNo: string
  streetSitioSubdv: string
  barangay: string
  municipality: string
  province: string
  region: string
  contactNumber: string
  sex: number
  civilStatus: number
  nameOfSpouse: string
  mothersMaidenName: string
  religion: string
  dateOfBirth: any
  placeOfBirth: string
}

export const HouseholdFragmentFragmentDoc = gql`
  fragment HouseholdFragment on Household {
    id
    firstName
    lastName
    middleName
    extensionName
    houseLotBldgNo
    referenceNo
    streetSitioSubdv
    barangay
    municipality
    province
    region
    contactNumber
    sex
    civilStatus
    nameOfSpouse
    mothersMaidenName
    religion
    dateOfBirth
    placeOfBirth
  }
`
export const HouseholdListDocument = gql`
  query HouseholdList(
    $where: HouseholdBoolExp
    $orderBy: [HouseholdOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    householdList: householdAggregate(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      data: nodes {
        id
        lastName
        firstName
        middleName
        referenceNo
        barangay
      }
      meta: aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`

export function useHouseholdListQuery(
  options?: Omit<Urql.UseQueryArgs<HouseholdListQueryVariables>, 'query'>
) {
  return Urql.useQuery<HouseholdListQuery>({
    query: HouseholdListDocument,
    ...options,
  })
}
export const HouseholdDetailsDocument = gql`
  query HouseholdDetails($id: uuid!) {
    householdByPk(id: $id) {
      ...HouseholdFragment
    }
  }
  ${HouseholdFragmentFragmentDoc}
`

export function useHouseholdDetailsQuery(
  options: Omit<Urql.UseQueryArgs<HouseholdDetailsQueryVariables>, 'query'>
) {
  return Urql.useQuery<HouseholdDetailsQuery>({
    query: HouseholdDetailsDocument,
    ...options,
  })
}
