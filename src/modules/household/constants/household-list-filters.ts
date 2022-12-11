import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'
import { barangayOptions } from './form-options'

export const householdListFilters: DataTableFilter<T.Household>[] = [
  {
    field: 'referenceNo',
    type: FieldTypeEnum.String,
    label: 'Reference No.',
  },
  {
    field: 'barangay',
    type: FieldTypeEnum.String,
    label: 'Barangay',
  },
  {
    field: 'firstName',
    type: FieldTypeEnum.String,
    label: 'First Name',
  },
  {
    field: 'lastName',
    type: FieldTypeEnum.String,
    label: 'Last Name',
  },
]
