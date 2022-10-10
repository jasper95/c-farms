import PropTypes from 'prop-types'
import { PropsWithChildren } from 'react'
// material
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import theme from './theme'

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default function ThemeProvider({ children }: PropsWithChildren<{}>) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}
