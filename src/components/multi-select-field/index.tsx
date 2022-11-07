import { FieldValues, useController } from 'react-hook-form'
import { MultiSelectFieldProps } from './interface'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useMemo } from 'react'
import keyBy from 'lodash/keyBy'

export default function MultiSelectField<T extends FieldValues>(
  props: MultiSelectFieldProps<T>
) {
  const { options, control, name, disabled, ...restProps } = props
  const controller = useController({
    control,
    name,
  })
  const { field, formState } = controller
  const { value = [], onChange, ...restField } = field
  const optionsMap = useMemo(() => keyBy(options, 'value'), [options])
  return (
    <Autocomplete
      {...restField}
      disabled={disabled}
      multiple
      options={options.map((e) => e.value)}
      value={value}
      onChange={(_, newValue) => {
        onChange(newValue)
      }}
      getOptionLabel={(val) => optionsMap[val]?.label ?? ''}
      renderInput={(params) => (
        <TextField
          {...restProps}
          {...params}
          error={Boolean(formState.errors[name])}
          helperText={formState.errors[name]?.message}
        />
      )}
    />
  )
}
