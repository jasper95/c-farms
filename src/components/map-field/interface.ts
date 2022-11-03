import { UseControllerProps, FieldValues } from 'react-hook-form'

export type IMapFieldProps<T extends FieldValues> = UseControllerProps<T> & {
  label: string
  enabled: boolean
}
