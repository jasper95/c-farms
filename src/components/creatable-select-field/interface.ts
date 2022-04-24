import { UseControllerProps } from 'react-hook-form'
import { CreatableProps } from 'react-select/creatable'

export type Option = {
  label: string
  value: string
}

export type ICreatableSelectFieldProps<T> = UseControllerProps<T> &
  CreatableProps<Option, any, any>
