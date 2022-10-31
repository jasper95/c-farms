import {
  Adapter,
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from 'next-auth/adapters'
import camelcaseKeys from 'camelcase-keys'
import { authSdk } from '../auth-sdk'

const transformDate = <T extends { [key: string]: unknown }>(
  object: T | null | undefined,
  key: keyof T
) => {
  if (!object) return

  if (object[key]) {
    return {
      ...object,
      [key]: new Date(object[key] as string),
    }
  }

  return object
}

export const HasuraAdapter = (): Adapter => {
  return {
    createUser: async (data) => {
      const res = await authSdk.CreateAuthUser({ data })
      const user = transformDate(res?.insertUserOne, 'emailVerified')

      return user as AdapterUser
    },
    getUser: async (id) => {
      const res = await authSdk.GetAuthUser({ id })
      const user = transformDate(res?.userByPk, 'emailVerified')

      return user as AdapterUser
    },
    getUserByEmail: async (email) => {
      const res = await authSdk.GetAuthUsers({
        where: { email: { _eq: email } },
      })
      const user = transformDate(res?.user?.[0], 'emailVerified')

      if (!user) return null

      return user as AdapterUser
    },
    getUserByAccount: async ({ providerAccountId, provider, ...restData }) => {
      const res = await authSdk.GetAuthUsers({
        where: {
          accounts: {
            provider: { _eq: provider },
            providerAccountId: { _eq: providerAccountId },
          },
        },
      })
      const user = transformDate(res?.user?.[0], 'emailVerified')

      if (!user) return null

      return user as AdapterUser
    },
    updateUser: async ({ id, ...data }) => {
      const res = await authSdk.UpdateAuthUser({ id, data })
      const user = transformDate(res?.updateUserByPk, 'emailVerified')

      return user as AdapterUser
    },
    deleteUser: async (id) => {
      const res = await authSdk.DeleteAuthUser({ id })
      const user = transformDate(res?.deleteUserByPk, 'emailVerified')

      return user as AdapterUser
    },
    // Session
    createSession: async (data) => {
      const res = await authSdk.CreateSession({ data })
      const session = transformDate(res?.insertSessionOne, 'expires')

      return session as AdapterSession
    },
    getSessionAndUser: async (sessionToken) => {
      const res = await authSdk.GetSession({ sessionToken })
      const session = transformDate(res?.session?.[0], 'expires')
      const user = transformDate(session?.user, 'emailVerified')

      return {
        session: session as AdapterSession,
        user: user as AdapterUser,
      }
    },
    updateSession: async ({ sessionToken, ...data }) => {
      const res = await authSdk.UpdateSession({ sessionToken, data })
      const session = transformDate(
        res?.updateSession?.returning?.[0],
        'expires'
      )

      if (!session) return

      return session as AdapterSession
    },
    deleteSession: async (sessionToken) => {
      const res = await authSdk.DeleteSession({ sessionToken })
      const session = transformDate(
        res?.deleteSession?.returning?.[0],
        'expires'
      )

      if (!session) return

      return session as AdapterSession
    },
    // Account
    linkAccount: async (data) => {
      const res = await authSdk.CreateAccount({
        data: camelcaseKeys(data),
      })
      const account = res?.insertAccountOne

      return account as AdapterAccount
    },
    unlinkAccount: async ({ providerAccountId, provider }) => {
      const res = await authSdk.DeleteAccount({ provider, providerAccountId })
      const account = res?.deleteAccount?.returning?.[0]

      if (!account) return

      return account as AdapterAccount
    },
    // Verification Token
    createVerificationToken: async (data) => {
      const res = await authSdk.CreateVerificationToken({ data })
      const verificationToken = transformDate(
        res?.insertVerificationTokenOne,
        'expires'
      )

      return verificationToken as VerificationToken
    },
    useVerificationToken: async ({ identifier, token }) => {
      const res = await authSdk.DeleteVerificationToken({ identifier, token })
      const verificationToken = transformDate(
        res?.deleteVerificationToken?.returning?.[0],
        'expires'
      )

      if (!verificationToken) return null

      return verificationToken as VerificationToken
    },
  }
}
