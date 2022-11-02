import React from 'react'
import { useAuthStore } from '@/lib/stores/auth.store'

interface WithAuthParams {
  resource: string
  permission: string
}

export function withAuthorization(args: WithAuthParams) {
  return function withAuth<T>(WrappedComponent: React.FC<T>) {
    const WithAuthorization: React.FC<T> = (props) => {
      const { ability } = useAuthStore()
      if (ability?.cannot(args.permission, args.resource)) {
        return <div>Unauthorized</div>
      }
      return <WrappedComponent {...props} />
    }
    return WithAuthorization
  }
}
