import palette from './palette'
import typography from './typography'
import componentsOverride from './overrides'
import shadows, { customShadows } from './shadows'
import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: typeof customShadows
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customShadows: typeof customShadows
  }
}

declare module '@mui/material' {
  interface Color {
    500_8: string
    500_32: string
    500_12: string
    500_16: string
    500_56: string
  }
}
// A custom theme for this app
const theme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  typography,
  shadows,
  customShadows,
})
theme.components = componentsOverride(theme)

export default theme
