import LinearProgress from '@mui/material/LinearProgress'
import { useSession } from 'next-auth/react'
import React, { useEffect, useMemo } from 'react'
import { defineAbilityFor } from '@/modules/common/authorization/define-ability'
import { useAuthStore } from '@/lib/stores/auth.store'

export function withAuthentication<T>(WrappedComponent: React.FC<T>) {
  const WithAuthentication: React.FC<T> = (props) => {
    const { authorize } = useAuthStore()
    const { data: session, status } = useSession({ required: true })
    const isLoading = useMemo(() => status === 'loading', [status])
    useEffect(() => {
      if (session) {
        authorize(session, defineAbilityFor(session.user))
      }
    }, [session, authorize])
    if (isLoading) {
      return <LinearProgress />
    }
    return <WrappedComponent {...props} />
  }
  return WithAuthentication
}
