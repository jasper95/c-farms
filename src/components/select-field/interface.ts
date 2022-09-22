import { TextFieldProps } from '@mui/material/TextField'
import { UseControllerProps } from 'react-hook-form'

export type ISelectFieldProps<T> = TextFieldProps &
  UseControllerProps<T> & {
    options: { value: string; label: string }[]
    label: string
    placeholder?: string
  }
