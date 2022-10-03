import * as Types from '@/shared/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type CreateHouseholdMutationVariables = Types.Exact<{
  object: Types.HouseholdInsertInput
}>

export type CreateHouseholdMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Household'; id: any } | null | undefined
}

export type UpdateHouseholdMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.HouseholdSetInput>
  id: Types.HouseholdPkColumnsInput
}>

export type UpdateHouseholdMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Household'; id: any } | null | undefined
}

export const CreateHouseholdDocument = gql`
  mutation CreateHousehold($object: HouseholdInsertInput!) {
    data: insertHouseholdOne(object: $object) {
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
export const UpdateHouseholdDocument = gql`
  mutation UpdateHousehold(
    $object: HouseholdSetInput
    $id: HouseholdPkColumnsInput!
  ) {
    data: updateHouseholdByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`

export function useUpdateHouseholdMutation() {
  return Urql.useMutation<
    UpdateHouseholdMutation,
    UpdateHouseholdMutationVariables
  >(UpdateHouseholdDocument)
}
