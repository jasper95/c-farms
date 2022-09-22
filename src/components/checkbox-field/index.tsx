import MuiCheckbox from '@mui/material/Checkbox'
import { ICheckboxProps } from './interface'
import { Controller, FieldValues } from 'react-hook-form'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export default function CheckboxField<T extends FieldValues>(
  props: ICheckboxProps<T>
) {
  const { label, control, name, options } = props
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState }) => (
        <FormControl>
          <FormLabel component="legend">{label}</FormLabel>
          <FormGroup {...field} row>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                control={<MuiCheckbox name={name} />}
                label={option.label}
              />
            ))}
          </FormGroup>
        </FormControl>
      )}
    />
  )
}
