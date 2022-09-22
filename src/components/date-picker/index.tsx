import DateFnsUtils from '@date-io/date-fns'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'

import { IDatePickerProps } from './interface'
import { FieldValues, useController } from 'react-hook-form'
import TextField from '@mui/material/TextField'

export default function DatePicker<T extends FieldValues>(
  props: IDatePickerProps<T>
) {
  const { control, name, label } = props
  const controller = useController({
    control,
    name,
  })
  const { field, formState } = controller
  return (
    <DesktopDatePicker
      // disableToolbar
      // variant="inline"
      // format="MM/dd/yyyy"
      // margin="normal"
      InputProps={field}
      label={label}
      renderInput={(params) => (
        <TextField
          {...params}
          helperText={formState.errors[name]?.message}
          error={Boolean(formState.errors[name])}
        />
      )}
      // KeyboardButtonProps={{
      //   'aria-label': 'change date',
      // }}
      // autoOk
      // error={Boolean(formState.errors[name])}
      // helperText={formState.errors[name]?.message}
      value={field.value ? new Date(field.value) : field.value}
      onChange={(date) => field.onChange(date)}
    />
  )
}
