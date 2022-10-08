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
  list: Array<{
    __typename?: 'Program'
    id: any
    name: string
    type: string
    sponsoringAgency: string
    dateStart: any
    dateEnd?: any | null | undefined
  }>
  meta: {
    __typename?: 'ProgramAggregate'
    aggregate?:
      | { __typename?: 'ProgramAggregateFields'; count: number }
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
      sponsoringAgency
      dateStart
      dateEnd
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
