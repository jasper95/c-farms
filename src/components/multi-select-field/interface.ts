import { UseControllerProps, FieldValues } from 'react-hook-form'

export type Option = {
  label: string
  value: string
}

export type MultiSelectFieldProps<T extends FieldValues> =
  UseControllerProps<T> & {
    options: Option[]
    label: string
    placeholder?: string
  }
