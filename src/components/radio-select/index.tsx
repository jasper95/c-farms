import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import { IRadioSelectProps } from './interface'
import { FieldValues, useController } from 'react-hook-form'

export default function RadioSelect<T extends FieldValues>(
  props: IRadioSelectProps<T>
) {
  const { options, label, control, name } = props
  const { field } = useController({
    control,
    name,
  })
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        aria-label={`radio-select-${name}`}
        {...field}
        value={field.value ?? ''}
      >
        {options.map((option) => (
          <FormControlLabel
            key={`${option.value}`}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
