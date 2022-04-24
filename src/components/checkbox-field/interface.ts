import { UseControllerProps } from 'react-hook-form'

export type ICheckboxProps<T> = UseControllerProps<T> & {
  options: { value: string; label: string }[]
  label: string
  placeholder?: string
}
