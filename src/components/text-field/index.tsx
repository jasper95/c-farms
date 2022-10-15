import MuiTextField from '@mui/material/TextField'
import { ITextFieldProps } from './interface'
import { FieldValues, useController } from 'react-hook-form'

function TextField<T extends FieldValues>(props: ITextFieldProps<T>) {
  const { label, placeholder, control, name, InputProps, ...restProps } = props
  const controller = useController({
    control,
    name,
  })
  const { formState, field } = controller
  return (
    <MuiTextField
      InputProps={{
        ...(InputProps && InputProps),
        ...field,
        value: field.value || '',
      }}
      error={Boolean(formState.errors[name])}
      helperText={formState.errors[name]?.message}
      fullWidth
      label={label}
      placeholder={placeholder}
      variant="outlined"
      {...restProps}
    />
  )
}

export default TextField
