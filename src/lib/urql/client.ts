import { createClient } from 'urql'

export const urqlClient = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_URL || '',
  fetchOptions: {
    headers: {
      'X-Hasura-Admin-Secret': process.env.NEXT_PUBLIC_GRAPHQL_SECRET || '',
    },
  },
})
