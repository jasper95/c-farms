import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'

export const associationListFilters: DataTableFilter<T.Association>[] = [
  {
    field: 'active',
    type: FieldTypeEnum.Enumeration,
    label: 'Status',
    options: ['true', 'false'].map((e) => ({
      label: e,
      value: e,
    })),
  },
]
