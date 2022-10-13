import { SxProps, Theme } from '@mui/material/styles'
import { UseControllerProps, FieldValues } from 'react-hook-form'

export type Option = { value: string | number; label: string }
export type ISelectFieldProps<T extends FieldValues> = UseControllerProps<T> & {
  options: Option[]
  label: string
  placeholder?: string
  sx?: SxProps<Theme>
}
