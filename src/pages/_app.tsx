import React, { ReactElement, ReactNode } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '@/shared/theme'
import { AppProps } from 'next/dist/shared/lib/router/router'
import DialogContainer from '@/components/layout/dialog-container.layout'
import NotificationContainer from '@/components/layout/notification-container.layout'
import { SnackbarProvider } from 'notistack'
import { Provider as UrqlProvider } from 'urql'

import Amplify from 'aws-amplify'
import config from '@/aws-exports'
import 'tailwindcss/tailwind.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import { urqlClient } from '@/shared/urql/client'
import { NextPage } from 'next'

Amplify.configure({
  ...config,
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: Element | null = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
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
        <SnackbarProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <StylesProvider injectFirst>
              {getLayout(<Component {...pageProps} />)}
            </StylesProvider>
            <DialogContainer />
            <NotificationContainer />
          </ThemeProvider>
        </SnackbarProvider>
      </React.Fragment>
    </UrqlProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
