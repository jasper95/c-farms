import React, { ReactElement, ReactNode } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/lib/theme'
import { AppProps } from 'next/dist/shared/lib/router/router'
import DialogContainer from '@/components/layout/dialog-container.layout'
import NotificationContainer from '@/components/layout/notification-container.layout'
import { Provider as UrqlProvider } from 'urql'

import 'tailwindcss/tailwind.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import '@/components/map/styles/marker-clusterer.style.css'
import { urqlClient } from '@/lib/urql/client'
import { NextPage } from 'next'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@/lib/utils/create-emotion-cache'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <UrqlProvider value={urqlClient}>
      <React.Fragment>
        <Head>
          <title>{process.env.NEXT_PUBLIC_PROJECT_NAME}</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <CacheProvider value={emotionCache}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
                <DialogContainer />
                <NotificationContainer />
              </ThemeProvider>
            </StyledEngineProvider>
          </LocalizationProvider>
        </CacheProvider>
      </React.Fragment>
    </UrqlProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
