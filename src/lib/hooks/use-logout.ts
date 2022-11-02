import { signOut } from 'next-auth/react'
import { useAuthorizationStore } from '../authorization/stores/authorization.store'

export function useLogout() {
  const { logout } = useAuthorizationStore()
  return {
    handleLogout,
  }

  async function handleLogout() {
    await signOut()
    logout()
  }
}
