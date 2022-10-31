import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated'

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URL || '', {
  headers: {
    ['x-hasura-admin-secret']: process.env.NEXT_PUBLIC_GRAPHQL_SECRET || '',
  },
})

export const authSdk = getSdk(client)
