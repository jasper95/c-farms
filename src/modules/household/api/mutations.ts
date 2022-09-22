import * as Types from '@/shared/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type CreateHouseholdMutationVariables = Types.Exact<{
  object: Types.HouseholdInsertInput
}>

export type CreateHouseholdMutation = {
  __typename?: 'mutation_root'
  insertHouseholdOne?: { __typename?: 'Household'; id: any } | null | undefined
}

export const CreateHouseholdDocument = gql`
  mutation CreateHousehold($object: HouseholdInsertInput!) {
    insertHouseholdOne(object: $object) {
      id
    }
  }
`

export function useCreateHouseholdMutation() {
  return Urql.useMutation<
    CreateHouseholdMutation,
    CreateHouseholdMutationVariables
  >(CreateHouseholdDocument)
}
