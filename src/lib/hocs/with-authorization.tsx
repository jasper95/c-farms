import React from 'react'
import { useAuthStore } from '@/lib/stores/auth.store'
import { PermissionDenied } from '@/components/permission-denied'

interface WithAuthParams {
  resource: string
  permission: string
}

export function withAuthorization(args: WithAuthParams) {
  return function withAuth<T>(WrappedComponent: React.FC<T>) {
    const WithAuthorization: React.FC<T> = (props) => {
      const { ability } = useAuthStore()
      if (ability?.cannot(args.permission, args.resource)) {
        return <PermissionDenied />
      }
      return <WrappedComponent {...props} />
    }
    return WithAuthorization
  }
}
