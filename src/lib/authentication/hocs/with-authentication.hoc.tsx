import { LinearProgress } from '@mui/material'
import { useSession } from 'next-auth/react'
import React, { useEffect, useMemo } from 'react'
import { defineAbilityFor } from '../../authorization/define-ability'
import { useAuthorizationStore } from '../../authorization/stores/authorization.store'

export function withAuthentication<T>(WrappedComponent: React.FC<T>) {
  const WithAuth: React.FC<T> = (props) => {
    const { authorize } = useAuthorizationStore()
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
  return WithAuth
}
