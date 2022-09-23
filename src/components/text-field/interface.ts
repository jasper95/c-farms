import { TextFieldProps } from '@mui/material/TextField'
import { UseControllerProps, FieldValues } from 'react-hook-form'

export type ITextFieldProps<T extends FieldValues> = TextFieldProps &
  UseControllerProps<T>
