import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type HouseholdViewListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.HouseholdViewBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.HouseholdViewOrderBy> | Types.HouseholdViewOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type HouseholdViewListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'HouseholdView'
    id: any
    name: string
    firstName: string
    lastName: string
    middleName: string
    mainLivelihood?: any | null | undefined
    referenceNo: string
    barangay: string
    is4psBeneficiary: boolean
    ipMembership: string
    maleCount: number
    femaleCount: number
  }>
  meta: {
    __typename?: 'HouseholdViewAggregate'
    aggregate?:
      | { __typename?: 'HouseholdViewAggregateFields'; count: number }
      | null
      | undefined
  }
}

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
  list: Array<{
    __typename?: 'Household'
    id: any
    lastName: string
    firstName: string
    middleName: string
    referenceNo: string
    barangay: string
    is4psBeneficiary: boolean
    ipMembership: string
    maleCount: number
    femaleCount: number
  }>
  meta: {
    __typename?: 'HouseholdAggregate'
    aggregate?:
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
  details?:
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
        nameOfHouseholdHead: string
        relationshipToHouseholdHead: string
        maleCount: number
        femaleCount: number
        governmentIdType: string
        governmentIdNo: string
        personWithDisability: boolean
        is4psBeneficiary: boolean
        isHouseholdHead: boolean
        ipMembership: string
        emergencyContactName: string
        emergencyContactNumber: string
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
  nameOfHouseholdHead: string
  relationshipToHouseholdHead: string
  maleCount: number
  femaleCount: number
  governmentIdType: string
  governmentIdNo: string
  personWithDisability: boolean
  is4psBeneficiary: boolean
  isHouseholdHead: boolean
  ipMembership: string
  emergencyContactName: string
  emergencyContactNumber: string
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
    nameOfHouseholdHead
    relationshipToHouseholdHead
    maleCount
    femaleCount
    governmentIdType
    governmentIdNo
    personWithDisability
    is4psBeneficiary
    isHouseholdHead
    ipMembership
    emergencyContactName
    emergencyContactNumber
  }
`
export const HouseholdViewListDocument = gql`
  query HouseholdViewList(
    $where: HouseholdViewBoolExp
    $orderBy: [HouseholdViewOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: householdView(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      name
      firstName
      lastName
      middleName
      mainLivelihood
      referenceNo
      barangay
      is4psBeneficiary
      ipMembership
      maleCount
      femaleCount
    }
    meta: householdViewAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useHouseholdViewListQuery(
  options?: Omit<Urql.UseQueryArgs<HouseholdViewListQueryVariables>, 'query'>
) {
  return Urql.useQuery<HouseholdViewListQuery, HouseholdViewListQueryVariables>(
    { query: HouseholdViewListDocument, ...options }
  )
}
export const HouseholdListDocument = gql`
  query HouseholdList(
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
      lastName
      firstName
      middleName
      referenceNo
      barangay
      is4psBeneficiary
      ipMembership
      maleCount
      femaleCount
    }
    meta: householdAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useHouseholdListQuery(
  options?: Omit<Urql.UseQueryArgs<HouseholdListQueryVariables>, 'query'>
) {
  return Urql.useQuery<HouseholdListQuery, HouseholdListQueryVariables>({
    query: HouseholdListDocument,
    ...options,
  })
}
export const HouseholdDetailsDocument = gql`
  query HouseholdDetails($id: uuid!) {
    details: householdByPk(id: $id) {
      ...HouseholdFragment
    }
  }
  ${HouseholdFragmentFragmentDoc}
`

export function useHouseholdDetailsQuery(
  options: Omit<Urql.UseQueryArgs<HouseholdDetailsQueryVariables>, 'query'>
) {
  return Urql.useQuery<HouseholdDetailsQuery, HouseholdDetailsQueryVariables>({
    query: HouseholdDetailsDocument,
    ...options,
  })
}
