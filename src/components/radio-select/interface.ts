import { UseControllerProps } from 'react-hook-form'

export type IRadioSelectProps<T> = UseControllerProps<T> & {
  options: { value: string | boolean; label: string }[]
  label: string
}
