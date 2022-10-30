import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { ISelectFieldProps } from './interface'
import { FieldValues, useController } from 'react-hook-form'
import { useMemo } from 'react'
import keyBy from 'lodash/keyBy'

function SelectField<T extends FieldValues>(props: ISelectFieldProps<T>) {
  const { options, label, placeholder, control, name, sx } = props
  const controller = useController({
    control,
    name,
  })
  const { field, formState } = controller
  const { value = '', onChange, ...restField } = field
  const optionsMap = useMemo(() => keyBy(options, 'value'), [options])
  return (
    <Autocomplete
      sx={sx}
      disableClearable
      options={options.map((e) => e.value)}
      getOptionLabel={(e) => optionsMap[`${e}`]?.label ?? ''}
      {...restField}
      onChange={(_, newValue) => {
        onChange(newValue)
      }}
      value={value}
      renderInput={(params) => (
        <TextField
          label={label}
          {...params}
          error={Boolean(formState.errors[name])}
          helperText={formState.errors[name]?.message}
        />
      )}
    />
  )
}

export default SelectField
