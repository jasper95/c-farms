import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'

export const commodityProduceListFilters: DataTableFilter<T.Produce>[] = [
  {
    field: 'year',
    type: FieldTypeEnum.Number,
    label: 'Year',
  },
  {
    field: 'commodityName',
    type: FieldTypeEnum.String,
    label: 'Name',
  },
  {
    field: 'commodityType',
    type: FieldTypeEnum.String,
    label: 'Type',
  },
]
