import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { ISelectFieldProps } from './interface'
import { FieldValues, useController } from 'react-hook-form'

function SelectField<T extends FieldValues>(props: ISelectFieldProps<T>) {
  const { options, label, placeholder, control, name } = props
  const controller = useController({
    control,
    name,
  })
  const { formState, field } = controller
  return (
    <TextField
      error={formState.errors[name]}
      helperText={formState.errors[name]}
      inputProps={field}
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
