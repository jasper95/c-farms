import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type CreateCommodityMutationVariables = Types.Exact<{
  object: Types.CommodityInsertInput
}>

export type CreateCommodityMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Commodity'; id: any } | null | undefined
}

export type UpdateCommodityMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.CommoditySetInput>
  id: Types.CommodityPkColumnsInput
}>

export type UpdateCommodityMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Commodity'; id: any } | null | undefined
}

export type DeleteCommodityMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type DeleteCommodityMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Commodity'; id: any } | null | undefined
}

export const CreateCommodityDocument = gql`
  mutation CreateCommodity($object: CommodityInsertInput!) {
    data: insertCommodityOne(object: $object) {
      id
    }
  }
`

export function useCreateCommodityMutation() {
  return Urql.useMutation<
    CreateCommodityMutation,
    CreateCommodityMutationVariables
  >(CreateCommodityDocument)
}
export const UpdateCommodityDocument = gql`
  mutation UpdateCommodity(
    $object: CommoditySetInput
    $id: CommodityPkColumnsInput!
  ) {
    data: updateCommodityByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`

export function useUpdateCommodityMutation() {
  return Urql.useMutation<
    UpdateCommodityMutation,
    UpdateCommodityMutationVariables
  >(UpdateCommodityDocument)
}
export const DeleteCommodityDocument = gql`
  mutation DeleteCommodity($id: uuid!) {
    data: deleteCommodityByPk(id: $id) {
      id
    }
  }
`

export function useDeleteCommodityMutation() {
  return Urql.useMutation<
    DeleteCommodityMutation,
    DeleteCommodityMutationVariables
  >(DeleteCommodityDocument)
}
