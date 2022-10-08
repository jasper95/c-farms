import { DesktopDatePickerProps } from '@mui/x-date-pickers'
import { UseControllerProps, FieldValues } from 'react-hook-form'

export type IDatePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<
    DesktopDatePickerProps<Date, Date>,
    'renderInput' | 'onChange' | 'value' | 'views'
  >
