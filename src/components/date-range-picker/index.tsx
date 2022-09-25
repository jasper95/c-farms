import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import {
  DateRangePicker as MuiDateRangePicker,
  DateRangePickerProps,
} from './DateRangePicker'

type IDateRangePickerProps<T extends FieldValues> = Omit<
  DateRangePickerProps<Date, Date>,
  'onChange' | 'value' | 'renderInput'
> &
  UseControllerProps<T>

export default function DateRangePicker<T extends FieldValues>(
  props: IDateRangePickerProps<T>
) {
  const { control, name, label, ...restProps } = props
  const controller = useController({
    control,
    name,
  })
  const { field } = controller
  return (
    <Box>
      <Typography sx={{ mb: 1 }}>{label}</Typography>
      <MuiDateRangePicker
        {...restProps}
        value={field.value}
        onChange={field.onChange}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  )
}
