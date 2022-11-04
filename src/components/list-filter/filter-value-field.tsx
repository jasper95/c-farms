import Box from '@mui/material/Box'
import { UseFormReturn, useWatch } from 'react-hook-form'
import { AsyncSelectField } from '../asyc-select-field'
import { IFilter } from '../data-table/table-reducer'
import DatePicker from '../date-picker'
import SelectField from '../select-field'
import TextField from '../text-field'
import { FieldTypeEnum } from './field-type.enum'
import { IFilterFormSchema } from './filter-form-schema'
import { FilterTypeEnum } from './filter-type.enum'

interface FilterValueFieldProps {
  formProps: UseFormReturn<IFilterFormSchema>
  selectedFilter?: IFilter
}
export function FilterValueField(props: FilterValueFieldProps) {
  const { formProps, selectedFilter } = props
  const { control } = formProps
  const typeValue = useWatch({ control, name: 'type' })
  if ([FilterTypeEnum.IsNotNull, FilterTypeEnum.IsNull].includes(typeValue)) {
    return null
  }
  if (selectedFilter?.type === FieldTypeEnum.String) {
    return (
      <TextField sx={{ mb: 2 }} label="Value" control={control} name="value" />
    )
  } else if (selectedFilter?.type === FieldTypeEnum.Number) {
    return (
      <TextField
        sx={{ mb: 2 }}
        label="Value"
        type="number"
        control={control}
        name="value"
      />
    )
  } else if (selectedFilter?.type === FieldTypeEnum.Date) {
    return (
      <Box sx={{ mb: 2 }}>
        <DatePicker control={control} name="value" label="Value" />
      </Box>
    )
  } else if (selectedFilter?.type === FieldTypeEnum.Enumeration) {
    if (selectedFilter.asyncProps) {
      return (
        <AsyncSelectField
          {...selectedFilter.asyncProps}
          name="value"
          label="Value"
        />
      )
    }
    const { options = [] } = selectedFilter
    return (
      <SelectField
        sx={{ mb: 2 }}
        name="value"
        label="Value"
        control={control}
        options={options}
      />
    )
  }
  console.error(`Type ${typeValue} not supported`)
  return null
}
