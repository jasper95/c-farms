import { TextFieldProps } from '@material-ui/core/TextField'
import { UseControllerProps } from 'react-hook-form'

export type ITextFieldProps<T> = TextFieldProps & UseControllerProps<T>
