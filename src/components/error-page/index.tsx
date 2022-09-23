import Error, { ErrorProps } from 'next/error'
import { Dashboard } from '@/components/layout/dashboard.layout'

function ErrorPage(props: ErrorProps) {
  return (
    <Dashboard>
      <Error {...props} />
    </Dashboard>
  )
}

export default ErrorPage
