import { UseControllerProps, FieldValues } from 'react-hook-form'
import { CreatableProps } from 'react-select/creatable'

export type Option = {
  label: string
  value: string
}

export type ICreatableSelectFieldProps<T extends FieldValues> =
  UseControllerProps<T> & CreatableProps<Option, any, any>
