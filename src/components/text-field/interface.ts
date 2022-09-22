import { TextFieldProps } from '@mui/material/TextField'
import { UseControllerProps } from 'react-hook-form'

export type ITextFieldProps<T> = TextFieldProps & UseControllerProps<T>
