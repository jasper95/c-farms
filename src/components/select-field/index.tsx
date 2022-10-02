import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { ISelectFieldProps } from './interface'
import { FieldValues, useController } from 'react-hook-form'
import { useMemo } from 'react'
import keyBy from 'lodash/keyBy'

function SelectField<T extends FieldValues>(props: ISelectFieldProps<T>) {
  const { options, label, placeholder, control, name, ...restProps } = props
  const controller = useController({
    control,
    name,
  })
  const { field } = controller
  const { value, onChange, ...restField } = field
  const optionsMap = useMemo(() => keyBy(options, 'value'), [options])
  return (
    <Autocomplete
      disableClearable
      options={options.map((e) => e.value)}
      getOptionLabel={(e) => optionsMap[`${e}`]?.label ?? ''}
      {...restField}
      onChange={(_, newValue) => {
        onChange(newValue)
      }}
      value={value || ''}
      renderInput={(params) => <TextField label={label} {...params} />}
    />
  )
}

export default SelectField
