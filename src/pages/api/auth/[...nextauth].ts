import NextAuth, { NextAuthOptions } from 'next-auth'
import jwt from 'jsonwebtoken'
import { HasuraAdapter } from '@/lib/authentication/adapter/hasura-adapter'
import { JWT } from 'next-auth/jwt'
import GoogleProvider from 'next-auth/providers/google'
import { authSdk } from '@/lib/authentication/sdk'
import camelcaseKeys from 'camelcase-keys'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  adapter: HasuraAdapter(),
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
  pages: {},
  secret: process.env.JWT_SECRET,
  callbacks: {
    // TODO: use generated jwt to hasura requests
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          role: user.role,
          'https://hasura.io/jwt/claims': {
            'x-hasura-allowed-roles': [user?.role],
            'x-hasura-default-role': user?.role,
            'x-hasura-role': user?.role,
            'x-hasura-user-id': token.sub,
          },
        }
      }
      return token
    },
    async signIn(args) {
      const { user, account } = args
      const { user: users } = await authSdk.GetAuthUsers({
        where: {
          email: {
            _eq: user.email,
          },
        },
      })
      if (users.length === 0) {
        return false
      }
      const accounts = await authSdk.GetAuthAccount({
        provider: account?.provider ?? '',
        providerAccountId: account?.providerAccountId ?? '',
      })
      if (accounts.account?.length === 0) {
        await authSdk.CreateAccount({
          data: camelcaseKeys({
            ...account,
            userId: users[0]?.id,
          }),
        })
      }
      return true
    },
    session({ session, token }) {
      session.user.role = token.role
      return session
    },
  },
}

export default NextAuth(authOptions)
