import { TextFieldProps } from '@mui/material/TextField'
import { UseControllerProps, FieldValues } from 'react-hook-form'

export type Option = { value: string | number; label: string }
export type ISelectFieldProps<T extends FieldValues> = TextFieldProps &
  UseControllerProps<T> & {
    options: Option[]
    label: string
    placeholder?: string
  }
