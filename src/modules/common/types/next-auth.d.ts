import { RoleEnum } from '@/modules/common/authorization/enums/role.enum'
import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      role: RoleEnum
    } & DefaultSession['user'] &
      DefaultUser
  }

  interface User extends DefaultUser {
    role: RoleEnum
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    role: RoleEnum
    idToken?: string
  }
}
