import { KeyboardDatePickerProps } from '@material-ui/pickers/DatePicker'
import { UseControllerProps } from 'react-hook-form'

export type IDatePickerProps<T> = UseControllerProps<T> & {
  label: string
}
