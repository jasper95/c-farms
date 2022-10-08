import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { IDatePickerProps } from './interface'
import { FieldValues, useController } from 'react-hook-form'
import TextField from '@mui/material/TextField'

export default function YearPicker<T extends FieldValues>(
  props: IDatePickerProps<T>
) {
  const { control, name, ...restProps } = props
  const controller = useController({
    control,
    name,
  })
  const { field, formState } = controller
  const { value } = field
  const parsedValue = value ? new Date(field?.value, 0) : field.value
  return (
    <DesktopDatePicker
      {...restProps}
      views={['year']}
      InputProps={{
        ...field,
        value: parsedValue,
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          helperText={formState.errors[name]?.message}
          error={Boolean(formState.errors[name])}
        />
      )}
      value={parsedValue}
      onChange={(date) => field.onChange(date?.getFullYear())}
    />
  )
}
