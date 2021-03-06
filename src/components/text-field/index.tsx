import MuiTextField from '@material-ui/core/TextField'
import { ITextFieldProps } from './interface'
import { FieldValues, useController } from 'react-hook-form'

function TextField<T extends FieldValues>(props: ITextFieldProps<T>) {
  const { label, placeholder, control, name } = props
  const controller = useController({
    control,
    name,
  })
  const { formState, field } = controller
  return (
    <MuiTextField
      error={Boolean(formState.errors[name])}
      helperText={formState.errors[name]?.message}
      inputProps={field}
      fullWidth
      label={label}
      placeholder={placeholder}
      variant="outlined"
    />
  )
}

export default TextField
