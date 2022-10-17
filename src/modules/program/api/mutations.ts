import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type CreateProgramMutationVariables = Types.Exact<{
  object: Types.ProgramInsertInput
}>

export type CreateProgramMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Program'; id: any } | null | undefined
}

export type UpdateProgramMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.ProgramSetInput>
  id: Types.ProgramPkColumnsInput
}>

export type UpdateProgramMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Program'; id: any } | null | undefined
}

export type DeleteHouseholdProgramMutationVariables = Types.Exact<{
  programId: Types.Scalars['uuid']
  householdIds: Array<Types.Scalars['uuid']> | Types.Scalars['uuid']
}>

export type DeleteHouseholdProgramMutation = {
  __typename?: 'mutation_root'
  deleteHouseholdToProgram?:
    | {
        __typename?: 'HouseholdToProgramMutationResponse'
        affected_rows: number
        returning: Array<{ __typename?: 'HouseholdToProgram'; id: any }>
      }
    | null
    | undefined
}

export type CreateHouseholdProgramMutationVariables = Types.Exact<{
  objects:
    | Array<Types.HouseholdToProgramInsertInput>
    | Types.HouseholdToProgramInsertInput
}>

export type CreateHouseholdProgramMutation = {
  __typename?: 'mutation_root'
  insertHouseholdToProgram?:
    | {
        __typename?: 'HouseholdToProgramMutationResponse'
        affected_rows: number
        returning: Array<{ __typename?: 'HouseholdToProgram'; id: any }>
      }
    | null
    | undefined
}

export const CreateProgramDocument = gql`
  mutation CreateProgram($object: ProgramInsertInput!) {
    data: insertProgramOne(object: $object) {
      id
    }
  }
`

export function useCreateProgramMutation() {
  return Urql.useMutation<
    CreateProgramMutation,
    CreateProgramMutationVariables
  >(CreateProgramDocument)
}
export const UpdateProgramDocument = gql`
  mutation UpdateProgram(
    $object: ProgramSetInput
    $id: ProgramPkColumnsInput!
  ) {
    data: updateProgramByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`

export function useUpdateProgramMutation() {
  return Urql.useMutation<
    UpdateProgramMutation,
    UpdateProgramMutationVariables
  >(UpdateProgramDocument)
}
export const DeleteHouseholdProgramDocument = gql`
  mutation DeleteHouseholdProgram($programId: uuid!, $householdIds: [uuid!]!) {
    deleteHouseholdToProgram(
      where: {
        programId: { _eq: $programId }
        householdId: { _in: $householdIds }
      }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export function useDeleteHouseholdProgramMutation() {
  return Urql.useMutation<
    DeleteHouseholdProgramMutation,
    DeleteHouseholdProgramMutationVariables
  >(DeleteHouseholdProgramDocument)
}
export const CreateHouseholdProgramDocument = gql`
  mutation CreateHouseholdProgram($objects: [HouseholdToProgramInsertInput!]!) {
    insertHouseholdToProgram(objects: $objects) {
      returning {
        id
      }
      affected_rows
    }
  }
`

export function useCreateHouseholdProgramMutation() {
  return Urql.useMutation<
    CreateHouseholdProgramMutation,
    CreateHouseholdProgramMutationVariables
  >(CreateHouseholdProgramDocument)
}
