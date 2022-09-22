import { Theme } from '@mui/material'
import { withStyles } from '@mui/styles'
import TableRow from '@mui/material/TableRow'

const StyledTableRow = withStyles((theme: Theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

export default StyledTableRow
