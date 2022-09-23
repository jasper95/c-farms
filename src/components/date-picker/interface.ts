import { UseControllerProps, FieldValues } from 'react-hook-form'

export type IDatePickerProps<T extends FieldValues> = UseControllerProps<T> & {
  label: string
}
