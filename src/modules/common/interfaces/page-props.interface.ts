import { NextPage } from 'next/types'
import { ReactElement, ReactNode } from 'react'

export type PageProps<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
