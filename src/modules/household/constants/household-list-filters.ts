import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'
import { livelihoodOptions } from './form-options'

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
    type: FieldTypeEnum.String,
    label: 'Barangay',
  },
  {
    field: 'mainLivelihood',
    type: FieldTypeEnum.EnumerationMultiple,
    options: livelihoodOptions,
    label: 'Main Livelihood',
  },
]
