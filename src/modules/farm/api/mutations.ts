import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type CreateFarmMutationVariables = Types.Exact<{
  object: Types.FarmInsertInput
}>

export type CreateFarmMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Farm'; id: any } | null | undefined
}

export type UpdateFarmMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.FarmSetInput>
  id: Types.FarmPkColumnsInput
}>

export type UpdateFarmMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Farm'; id: any } | null | undefined
}

export const CreateFarmDocument = gql`
  mutation CreateFarm($object: FarmInsertInput!) {
    data: insertFarmOne(object: $object) {
      id
    }
  }
`

export function useCreateFarmMutation() {
  return Urql.useMutation<CreateFarmMutation, CreateFarmMutationVariables>(
    CreateFarmDocument
  )
}
export const UpdateFarmDocument = gql`
  mutation UpdateFarm($object: FarmSetInput, $id: FarmPkColumnsInput!) {
    data: updateFarmByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`

export function useUpdateFarmMutation() {
  return Urql.useMutation<UpdateFarmMutation, UpdateFarmMutationVariables>(
    UpdateFarmDocument
  )
}
