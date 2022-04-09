import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { ISelectFieldProps } from './interface'

function SelectField(props: ISelectFieldProps) {
  const { options, label, placeholder } = props
  return (
    <TextField
      fullWidth
      select
      label={label}
      placeholder={placeholder}
      variant="outlined"
    >
      {options.map((e) => (
        <MenuItem key={e.value} value={e.value}>
          {e.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default SelectField
