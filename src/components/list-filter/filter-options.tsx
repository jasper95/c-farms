import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SelectField from '../select-field'
import { FilterValueField } from './filter-value-field'
import { IFilter, IFilterValue } from '../data-table/table-reducer'
import { useFilterOptionsHook } from './use-filter-options.hook'

interface FilterOptionsProps {
  filters: IFilter[]
  onAddFilter: (filter: IFilterValue) => void
}
export function FilterOptions(props: FilterOptionsProps) {
  const { filters } = props
  const { typeOptions, formProps, selectedFilter, onClickAdd } =
    useFilterOptionsHook(props)
  const { control } = formProps
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        minWidth: 262,
        maxWidth: 362,
      }}
    >
      <SelectField
        sx={{ mb: 2 }}
        name="field"
        control={control}
        options={filters.map((filter) => ({
          label: filter.label,
          value: filter.field,
        }))}
        label="Field"
      />
      <SelectField
        sx={{ mb: 2 }}
        name="type"
        control={control}
        options={typeOptions}
        label="Type"
      />
      <FilterValueField formProps={formProps} selectedFilter={selectedFilter} />
      <Button variant="contained" color="primary" onClick={onClickAdd}>
        Add Filter
      </Button>
    </Box>
  )
}
