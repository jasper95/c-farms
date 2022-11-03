import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type CreateCommodityProduceMutationVariables = Types.Exact<{
  object: Types.CommodityProduceInsertInput
}>

export type CreateCommodityProduceMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'CommodityProduce'; id: any } | null | undefined
}

export type UpdateCommodityProduceMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.CommodityProduceSetInput>
  id: Types.CommodityProducePkColumnsInput
}>

export type UpdateCommodityProduceMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'CommodityProduce'; id: any } | null | undefined
}

export type DeleteCommodityProduceMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type DeleteCommodityProduceMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'CommodityProduce'; id: any } | null | undefined
}

export const CreateCommodityProduceDocument = gql`
  mutation CreateCommodityProduce($object: CommodityProduceInsertInput!) {
    data: insertCommodityProduceOne(object: $object) {
      id
    }
  }
`

export function useCreateCommodityProduceMutation() {
  return Urql.useMutation<
    CreateCommodityProduceMutation,
    CreateCommodityProduceMutationVariables
  >(CreateCommodityProduceDocument)
}
export const UpdateCommodityProduceDocument = gql`
  mutation UpdateCommodityProduce(
    $object: CommodityProduceSetInput
    $id: CommodityProducePkColumnsInput!
  ) {
    data: updateCommodityProduceByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`

export function useUpdateCommodityProduceMutation() {
  return Urql.useMutation<
    UpdateCommodityProduceMutation,
    UpdateCommodityProduceMutationVariables
  >(UpdateCommodityProduceDocument)
}
export const DeleteCommodityProduceDocument = gql`
  mutation DeleteCommodityProduce($id: uuid!) {
    data: deleteCommodityProduceByPk(id: $id) {
      id
    }
  }
`

export function useDeleteCommodityProduceMutation() {
  return Urql.useMutation<
    DeleteCommodityProduceMutation,
    DeleteCommodityProduceMutationVariables
  >(DeleteCommodityProduceDocument)
}
