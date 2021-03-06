import MuiCheckbox from '@material-ui/core/Checkbox'
import { ICheckboxProps } from './interface'
import { Controller, FieldValues } from 'react-hook-form'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

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
