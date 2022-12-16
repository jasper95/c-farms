import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'
import { barangayOptions } from '@/modules/household/constants'
import { farmTypeOptions } from './farm-form-options'

export const farmListFilters: DataTableFilter<T.Farm>[] = [
  {
    field: 'farmType',
    type: FieldTypeEnum.Enumeration,
    label: 'Type',
    options: farmTypeOptions,
  },
  {
    field: 'sizeInHaTotal',
    type: FieldTypeEnum.Number,
    label: 'Size (ha)',
  },
  {
    field: 'barangay',
    type: FieldTypeEnum.Enumeration,
    label: 'Barangay',
    options: barangayOptions,
  },
]
