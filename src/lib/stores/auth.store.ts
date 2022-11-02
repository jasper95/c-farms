import { MongoAbility } from '@casl/ability'
import { Session } from 'next-auth'
import create from 'zustand'

export type AppAbility = MongoAbility<[string, string]>
type IAuthStore = {
  isInitializing: boolean
  isLoading: boolean
  error: string | null
  accessToken: string
  session: Session | null
  ability: AppAbility | null
  authorize(session: Session, ability: AppAbility): void
  logout(): void
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isInitializing: true,
  isLoading: false,
  accessToken: '',
  session: null,
  error: null,
  ability: null,
  authorize: (session, ability) =>
    set(() => ({
      session,
      ability,
    })),
  logout: () =>
    set(() => ({
      session: null,
      ability: null,
    })),
}))
