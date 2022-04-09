import { GraphQLClient } from 'graphql-request'

const endpoint = '/api/graphql'
const headers = {
  headers: {
    // authorization: `Bearer token goes here`,
  },
}
const client = new GraphQLClient(endpoint, headers)

export function fetcher<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> =>
    client.request<TData, TVariables>(query, variables)
}
