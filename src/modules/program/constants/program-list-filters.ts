import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'

export const programListFilters: DataTableFilter<T.Program>[] = [
  {
    field: 'name',
    type: FieldTypeEnum.String,
    label: 'Name',
  },
  {
    field: 'type',
    type: FieldTypeEnum.String,
    label: 'Type',
  },
]