import * as Types from '@/shared/generated/graphql.types'

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
