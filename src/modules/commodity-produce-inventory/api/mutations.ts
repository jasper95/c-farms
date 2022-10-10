import * as Types from '@/lib/generated/graphql.types'

import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type CreateCommodityProduceInventoryMutationVariables = Types.Exact<{
  object: Types.CommodityProduceInventoryInsertInput
}>

export type CreateCommodityProduceInventoryMutation = {
  __typename?: 'mutation_root'
  data?:
    | { __typename?: 'CommodityProduceInventory'; id: any }
    | null
    | undefined
}

export type UpdateCommodityProduceInventoryMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.CommodityProduceInventorySetInput>
  id: Types.CommodityProduceInventoryPkColumnsInput
}>

export type UpdateCommodityProduceInventoryMutation = {
  __typename?: 'mutation_root'
  data?:
    | { __typename?: 'CommodityProduceInventory'; id: any }
    | null
    | undefined
}

export const CreateCommodityProduceInventoryDocument = gql`
  mutation CreateCommodityProduceInventory(
    $object: CommodityProduceInventoryInsertInput!
  ) {
    data: insertCommodityProduceInventoryOne(object: $object) {
      id
    }
  }
`

export function useCreateCommodityProduceInventoryMutation() {
  return Urql.useMutation<
    CreateCommodityProduceInventoryMutation,
    CreateCommodityProduceInventoryMutationVariables
  >(CreateCommodityProduceInventoryDocument)
}
export const UpdateCommodityProduceInventoryDocument = gql`
  mutation UpdateCommodityProduceInventory(
    $object: CommodityProduceInventorySetInput
    $id: CommodityProduceInventoryPkColumnsInput!
  ) {
    data: updateCommodityProduceInventoryByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`

export function useUpdateCommodityProduceInventoryMutation() {
  return Urql.useMutation<
    UpdateCommodityProduceInventoryMutation,
    UpdateCommodityProduceInventoryMutationVariables
  >(UpdateCommodityProduceInventoryDocument)
}
