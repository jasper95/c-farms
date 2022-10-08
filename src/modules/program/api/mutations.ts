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
