import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type CreateUserMutationVariables = Types.Exact<{
  object: Types.UserInsertInput
}>

export type CreateUserMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'User'; id: any } | null | undefined
}

export type UpdateUserMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.UserSetInput>
  id: Types.UserPkColumnsInput
}>

export type UpdateUserMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'User'; id: any } | null | undefined
}

export const CreateUserDocument = gql`
  mutation CreateUser($object: UserInsertInput!) {
    data: insertUserOne(object: $object) {
      id
    }
  }
`

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument
  )
}
export const UpdateUserDocument = gql`
  mutation UpdateUser($object: UserSetInput, $id: UserPkColumnsInput!) {
    data: updateUserByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument
  )
}
