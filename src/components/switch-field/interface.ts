import { UseControllerProps, FieldValues } from 'react-hook-form'

export type ISwitchProps<T extends FieldValues> = UseControllerProps<T> & {
  label: string
  placeholder?: string
}
