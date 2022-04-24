import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
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
      <RadioGroup row aria-label={`radio-select-${name}`} {...field}>
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
