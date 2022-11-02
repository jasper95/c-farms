import { signOut } from 'next-auth/react'
import { useAuthStore } from '../../../lib/stores/auth.store'

export function useLogout() {
  const { logout } = useAuthStore()
  return {
    handleLogout,
  }

  async function handleLogout() {
    await signOut()
    logout()
  }
}
