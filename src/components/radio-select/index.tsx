import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import { IRadioSelectProps } from './interface'

function RadioSelect(props: IRadioSelectProps) {
  const { options, label } = props
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup row aria-label="radio-select" name="row-radio-buttons-group">
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

export default RadioSelect
