import { Theme } from '@mui/material/styles'
import Card from './card'
import Paper from './paper'
import Input from './input'
import Button from './button'
import Tooltip from './tooltip'
import Backdrop from './backdrop'
import Typography from './typography'
import CssBaseline from './css-baseline'
import Autocomplete from './auto-complete'
import Grid from './grid'

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Card(theme),
    Input(theme),
    Paper(),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    CssBaseline(),
    Autocomplete(theme),
    Grid(theme)
  )
}
