import { TextFieldProps } from '@mui/material/TextField'
import { UseControllerProps, FieldValues } from 'react-hook-form'

export type Option = {
  label: string
  value: any
}

export type MultiSelectFieldProps<T extends FieldValues> =
  UseControllerProps<T> &
    TextFieldProps & {
      options: Option[]
    }
