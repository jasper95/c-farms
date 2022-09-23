import { TextFieldProps } from '@mui/material/TextField'
import { UseControllerProps, FieldValues } from 'react-hook-form'

export type ISelectFieldProps<T extends FieldValues> = TextFieldProps &
  UseControllerProps<T> & {
    options: { value: string; label: string }[]
    label: string
    placeholder?: string
  }
