import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type AnnualInfoListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.AnnualInfoBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.AnnualInfoOrderBy> | Types.AnnualInfoOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type AnnualInfoListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'AnnualInfo'
    id: any
    year: number
    grossAnnualIncomeNonfarming: any
    grossAnnualIncomeFarming: any
    mainLivelihood: any
  }>
  meta: {
    __typename?: 'AnnualInfoAggregate'
    aggregate?:
      | { __typename?: 'AnnualInfoAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type AnnualInfoDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type AnnualInfoDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'AnnualInfo'
        id: any
        mainLivelihood: any
        farmworkerActivityType: any
        grossAnnualIncomeFarming: any
        grossAnnualIncomeNonfarming: any
        highestFormalEducation: string
        fisherActivityType: any
        year: number
      }
    | null
    | undefined
}

export type AnnualInfoFragmentFragment = {
  __typename?: 'AnnualInfo'
  id: any
  mainLivelihood: any
  farmworkerActivityType: any
  grossAnnualIncomeFarming: any
  grossAnnualIncomeNonfarming: any
  highestFormalEducation: string
  fisherActivityType: any
  year: number
}

export const AnnualInfoFragmentFragmentDoc = gql`
  fragment AnnualInfoFragment on AnnualInfo {
    id
    mainLivelihood
    farmworkerActivityType
    grossAnnualIncomeFarming
    grossAnnualIncomeNonfarming
    highestFormalEducation
    fisherActivityType
    year
  }
`
export const AnnualInfoListDocument = gql`
  query AnnualInfoList(
    $where: AnnualInfoBoolExp
    $orderBy: [AnnualInfoOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: annualInfo(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      year
      grossAnnualIncomeNonfarming
      grossAnnualIncomeFarming
      mainLivelihood
    }
    meta: annualInfoAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export function useAnnualInfoListQuery(
  options?: Omit<Urql.UseQueryArgs<AnnualInfoListQueryVariables>, 'query'>
) {
  return Urql.useQuery<AnnualInfoListQuery, AnnualInfoListQueryVariables>({
    query: AnnualInfoListDocument,
    ...options,
  })
}
export const AnnualInfoDetailsDocument = gql`
  query AnnualInfoDetails($id: uuid!) {
    details: annualInfoByPk(id: $id) {
      ...AnnualInfoFragment
    }
  }
  ${AnnualInfoFragmentFragmentDoc}
`

export function useAnnualInfoDetailsQuery(
  options: Omit<Urql.UseQueryArgs<AnnualInfoDetailsQueryVariables>, 'query'>
) {
  return Urql.useQuery<AnnualInfoDetailsQuery, AnnualInfoDetailsQueryVariables>(
    { query: AnnualInfoDetailsDocument, ...options }
  )
}
