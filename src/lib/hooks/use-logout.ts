import { signOut } from 'next-auth/react'

export function useLogout() {
  return {
    handleLogout,
  }

  async function handleLogout() {
    await signOut()
  }
}
