import { Theme } from '@mui/material/styles'

export default function Grid(theme: Theme) {
  return {
    MuiGrid2: {
      defaultProps: {
        disableEqualOverflow: true,
      },
    },
  }
}
