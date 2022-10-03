import { UseControllerProps, FieldValues } from 'react-hook-form'

export type Option = {
  label: string
  value: string
}

export type ICreatableSelectFieldProps<T extends FieldValues> =
  UseControllerProps<T> & {
    label: string
  }
