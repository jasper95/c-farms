import { FieldValues, useController } from 'react-hook-form'
import { MultiSelectFieldProps } from './interface'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useMemo } from 'react'
import keyBy from 'lodash/keyBy'

export default function MultiSelectField<T extends FieldValues>(
  props: MultiSelectFieldProps<T>
) {
  const { options, label, control, name } = props
  const controller = useController({
    control,
    name,
  })
  const { field } = controller
  const { value, onChange, ...restField } = field
  const optionsMap = useMemo(() => keyBy(options, 'value'), [options])
  return (
    <Autocomplete
      {...restField}
      multiple
      options={options.map((e) => e.value)}
      value={value}
      onChange={(_, newValue) => {
        onChange(newValue)
      }}
      getOptionLabel={(val) => optionsMap[val]?.label ?? ''}
      renderInput={(params) => <TextField label={label} {...params} />}
    />
  )
}
