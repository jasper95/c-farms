import MuiPickersUtilsProvider from '@material-ui/pickers/MuiPickersUtilsProvider'
import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker } from '@material-ui/pickers/DatePicker/DatePicker'
import { IDatePickerProps } from './interface'
import { FieldValues, useController } from 'react-hook-form'

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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        label={label}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        autoOk
        error={Boolean(formState.errors[name])}
        helperText={formState.errors[name]?.message}
        value={field.value ? new Date(field.value) : field.value}
        onChange={(date) => field.onChange(date)}
      />
    </MuiPickersUtilsProvider>
  )
}
