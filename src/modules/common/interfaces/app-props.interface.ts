import { EmotionCache } from '@emotion/cache'
import { Session } from 'next-auth'
import { AppProps as NextAppProps } from 'next/app'
import { PageProps } from './page-props.interface'

export type AppProps = NextAppProps & {
  Component: PageProps
  emotionCache?: EmotionCache
  session: Session
}
