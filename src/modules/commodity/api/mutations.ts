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
