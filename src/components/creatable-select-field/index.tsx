import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { FieldValues, useController } from 'react-hook-form'
import { ICreatableSelectFieldProps } from './interface'

function CreatableSelectField<T extends FieldValues>(
  props: ICreatableSelectFieldProps<T>
) {
  const { control, name, label, disabled } = props
  const controller = useController({
    control,
    name,
  })
  const { field, formState } = controller
  const { value = [] } = field
  return (
    <Autocomplete
      disabled={disabled}
      multiple
      options={[]}
      open={false}
      value={value}
      onChange={(_, newValue) => {
        field.onChange(newValue)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          onKeyDown={(e: any) => {
            if (e.code?.toLowerCase() === 'enter') {
              field.onChange(value.concat(e.target.value))
            }
          }}
          error={Boolean(formState.errors[name])}
          helperText={formState.errors[name]?.message}
        />
      )}
    />
  )
}

export default CreatableSelectField
