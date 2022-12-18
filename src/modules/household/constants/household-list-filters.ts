import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'
import { barangayOptions, livelihoodOptions } from './form-options'

export const householdListFilters: DataTableFilter<T.HouseholdView>[] = [
  {
    field: 'referenceNo',
    type: FieldTypeEnum.String,
    label: 'Reference No.',
  },
  {
    field: 'name',
    type: FieldTypeEnum.String,
    label: 'Name',
  },
  {
    field: 'barangay',
    type: FieldTypeEnum.Enumeration,
    label: 'Barangay',
    options: barangayOptions,
  },
  {
    field: 'mainLivelihood',
    type: FieldTypeEnum.EnumerationMultiple,
    options: livelihoodOptions,
    label: 'Main Livelihood',
  },
]
