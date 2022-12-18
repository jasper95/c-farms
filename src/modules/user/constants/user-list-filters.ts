import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'
import { roleTypeOptions } from './form-options'

export const userListFilters: DataTableFilter<T.User>[] = [
  {
    field: 'name',
    type: FieldTypeEnum.String,
    label: 'Name',
  },
  {
    field: 'role',
    type: FieldTypeEnum.Enumeration,
    label: 'Role',
    options: roleTypeOptions,
  },
  {
    field: 'active',
    type: FieldTypeEnum.Enumeration,
    label: 'Status',
    options: [
      { label: 'Active', value: 'true' },
      { label: 'Suspended', value: 'false' },
    ],
  },
]
