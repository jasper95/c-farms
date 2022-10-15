import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'

export const annualInfoListFilters: DataTableFilter<T.AnnualInfo>[] = [
  {
    field: 'year',
    type: FieldTypeEnum.Number,
    label: 'Year',
  },
]
