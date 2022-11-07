import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'
import { typeOptions } from '@/modules/commodity/constants/form-options'

export const commodityListFilters: DataTableFilter<T.Commodity>[] = [
  {
    field: 'name',
    type: FieldTypeEnum.String,
    label: 'Name',
  },
  {
    field: 'commodityType',
    type: FieldTypeEnum.Enumeration,
    label: 'Type',
    options: typeOptions,
  },
]
