import { UseControllerProps, FieldValues } from 'react-hook-form'

export type IRadioSelectProps<T extends FieldValues> = UseControllerProps<T> & {
  options: { value: string | boolean | number; label: string }[]
  label: string
}
