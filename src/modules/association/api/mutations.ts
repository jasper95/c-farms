import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type CreateAssociationMutationVariables = Types.Exact<{
  object: Types.AssociationInsertInput
}>

export type CreateAssociationMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Association'; id: any } | null | undefined
}

export type UpdateAssociationMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.AssociationSetInput>
  id: Types.AssociationPkColumnsInput
}>

export type UpdateAssociationMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Association'; id: any } | null | undefined
}

export const CreateAssociationDocument = gql`
  mutation CreateAssociation($object: AssociationInsertInput!) {
    data: insertAssociationOne(object: $object) {
      id
    }
  }
`

export function useCreateAssociationMutation() {
  return Urql.useMutation<
    CreateAssociationMutation,
    CreateAssociationMutationVariables
  >(CreateAssociationDocument)
}
export const UpdateAssociationDocument = gql`
  mutation UpdateAssociation(
    $object: AssociationSetInput
    $id: AssociationPkColumnsInput!
  ) {
    data: updateAssociationByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`

export function useUpdateAssociationMutation() {
  return Urql.useMutation<
    UpdateAssociationMutation,
    UpdateAssociationMutationVariables
  >(UpdateAssociationDocument)
}
