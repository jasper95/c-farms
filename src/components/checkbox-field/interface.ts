import { UseControllerProps, FieldValues } from 'react-hook-form'

export type ICheckboxProps<T extends FieldValues> = UseControllerProps<T> & {
  options: { value: string; label: string }[]
  label: string
  placeholder?: string
}
