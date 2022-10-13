import formatDate from '@/lib/utils/format-date'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { IFilterValue } from '../data-table/table-reducer'
import { FieldTypeEnum } from './field-type.enum'
import { FilterTypeEnum } from './filter-type.enum'

interface FilterValuesListProps {
  filterValues: IFilterValue[]
  setFilterValues(arg: IFilterValue[]): void
}

export function FilterValuesList(props: FilterValuesListProps) {
  const { filterValues, setFilterValues } = props
  return (
    <>
      {filterValues.map((filter) => (
        <Chip
          sx={{ m: 0.4 }}
          key={`${filter.id}`}
          label={[filter.label, filter.typeLabel, formatValue(filter)]
            .filter(Boolean)
            .join(' ')}
          onDelete={() =>
            setFilterValues(filterValues.filter((e) => e.id !== filter.id))
          }
        />
      ))}
    </>
  )

  function formatValue(filter: IFilterValue) {
    if (
      [FilterTypeEnum.IsNull, FilterTypeEnum.IsNotNull].includes(filter.type)
    ) {
      return ''
    }
    if (filter.fieldType === FieldTypeEnum.Date) {
      return formatDate(filter.value)
    }
    return filter.value
  }
}
