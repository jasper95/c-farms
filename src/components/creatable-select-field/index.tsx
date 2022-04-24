import { useState } from 'react'
import { FieldValues, useController } from 'react-hook-form'
import { MultiValue } from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { ICreatableSelectFieldProps, Option } from './interface'

const components = {
  DropdownIndicator: null,
}

const createOption = (label: string) => ({
  label,
  value: label,
})

function CreatableSelectField<T extends FieldValues>(
  props: ICreatableSelectFieldProps<T>
) {
  const { control, name, placeholder, options } = props
  const controller = useController({
    control,
    name,
  })
  const { field } = controller
  const [value, setValue] = useState<MultiValue<Option>>([])

  const handleChange = (newValue: MultiValue<Option>) => {
    setValue(newValue)
    field.onChange(newValue?.map((e) => e.value) || [])
  }

  return (
    <CreatableSelect
      instanceId={`react-select-${name}`}
      components={components}
      isClearable
      isMulti
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      options={options}
    />
  )
}

export default CreatableSelectField
