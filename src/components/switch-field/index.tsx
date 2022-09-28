import MuiSwitch from '@mui/material/Switch'
import { ISwitchProps } from './interface'
import { Controller, FieldValues } from 'react-hook-form'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export default function SwitchField<T extends FieldValues>(
  props: ISwitchProps<T>
) {
  const { label, control, name } = props
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl>
          <FormGroup {...field} row>
            <FormControlLabel
              control={<MuiSwitch name={name} />}
              label={label}
            />
          </FormGroup>
        </FormControl>
      )}
    />
  )
}
