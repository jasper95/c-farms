import { createClient } from 'urql'

export const urqlClient = createClient({
  url: '/graphql',
  fetchOptions: {
    headers: {
      'X-Hasura-Admin-Secret': process.env.NEXT_PUBLIC_GRAPHQL_SECRET || '',
    },
  },
})
