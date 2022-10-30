import NextAuth, { NextAuthOptions } from 'next-auth'
import jwt from 'jsonwebtoken'
import EmailProvider from 'next-auth/providers/email'
import { HasuraAdapter } from '@/lib/auth/adapter/hasura-adapter'
import { JWT } from 'next-auth/jwt'

export const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      server: {
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
          user: 'apiKey',
          pass: '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',
        },
      },
      from: 'no-reply@c-farms.vercel.app',
    }),
  ],
  adapter: HasuraAdapter({
    endpoint: process.env.NEXT_PUBLIC_GRAPHQL_URL || '',
    adminSecret: process.env.NEXT_PUBLIC_GRAPHQL_SECRET || '',
  }),
  theme: {
    colorScheme: 'auto',
  },
  // Use JWT strategy so we can forward them to Hasura
  session: { strategy: 'jwt' },
  // Encode and decode your JWT with the HS256 algorithm
  jwt: {
    encode: ({ secret, token }) => {
      const encodedToken = jwt.sign(token!, secret, {
        algorithm: 'HS256',
      })
      return encodedToken
    },
    decode: async ({ secret, token }) => {
      const decodedToken = jwt.verify(token!, secret, {
        algorithms: ['HS256'],
      })
      return decodedToken as JWT
    },
  },
  callbacks: {
    async jwt({ token }) {
      return {
        ...token,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['user'],
          'x-hasura-default-role': 'user',
          'x-hasura-role': 'user',
          'x-hasura-user-id': token.sub,
        },
      }
    },
    // Add user ID to the session
    // session: async ({ session, token, user }) => {
    //   user.id = token.sub!
    //   return session
    // },
  },
}

export default NextAuth(authOptions)
