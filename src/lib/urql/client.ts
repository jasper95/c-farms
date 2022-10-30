import {
  createClient,
  dedupExchange,
  errorExchange,
  fetchExchange,
  cacheExchange,
} from 'urql'
import { devtoolsExchange } from '@urql/devtools'

export const urqlClient = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_URL || '',
  fetchOptions: {
    headers: {
      'X-Hasura-Admin-Secret': process.env.NEXT_PUBLIC_GRAPHQL_SECRET || '',
    },
  },
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange,
    errorExchange({
      onError(error) {
        console.error(error)
      },
    }),
    fetchExchange,
  ],
})
