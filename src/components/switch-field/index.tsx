import MuiSwitch from '@mui/material/Switch'
import { ISwitchProps } from './interface'
import { FieldValues, useController } from 'react-hook-form'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export default function SwitchField<T extends FieldValues>(
  props: ISwitchProps<T>
) {
  const { label, name, control } = props
  const controller = useController({
    control,
    name,
  })
  const { field } = controller
  return (
    <FormControl>
      <FormGroup row>
        <FormControlLabel
          control={<MuiSwitch {...field} checked={field.value || false} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  )
}
