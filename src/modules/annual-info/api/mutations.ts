import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type CreateAnnualInfoMutationVariables = Types.Exact<{
  object: Types.AnnualInfoInsertInput
}>

export type CreateAnnualInfoMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'AnnualInfo'; id: any } | null | undefined
}

export type UpdateAnnualInfoMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.AnnualInfoSetInput>
  id: Types.AnnualInfoPkColumnsInput
}>

export type UpdateAnnualInfoMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'AnnualInfo'; id: any } | null | undefined
}

export type DeleteAnnualInfoMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type DeleteAnnualInfoMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'AnnualInfo'; id: any } | null | undefined
}

export const CreateAnnualInfoDocument = gql`
  mutation CreateAnnualInfo($object: AnnualInfoInsertInput!) {
    data: insertAnnualInfoOne(object: $object) {
      id
    }
  }
`

export function useCreateAnnualInfoMutation() {
  return Urql.useMutation<
    CreateAnnualInfoMutation,
    CreateAnnualInfoMutationVariables
  >(CreateAnnualInfoDocument)
}
export const UpdateAnnualInfoDocument = gql`
  mutation UpdateAnnualInfo(
    $object: AnnualInfoSetInput
    $id: AnnualInfoPkColumnsInput!
  ) {
    data: updateAnnualInfoByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`

export function useUpdateAnnualInfoMutation() {
  return Urql.useMutation<
    UpdateAnnualInfoMutation,
    UpdateAnnualInfoMutationVariables
  >(UpdateAnnualInfoDocument)
}
export const DeleteAnnualInfoDocument = gql`
  mutation DeleteAnnualInfo($id: uuid!) {
    data: deleteAnnualInfoByPk(id: $id) {
      id
    }
  }
`

export function useDeleteAnnualInfoMutation() {
  return Urql.useMutation<
    DeleteAnnualInfoMutation,
    DeleteAnnualInfoMutationVariables
  >(DeleteAnnualInfoDocument)
}
