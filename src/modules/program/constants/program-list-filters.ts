import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'
import { typeOptions } from '@/modules/program/constants/form-options'

export const programListFilters: DataTableFilter<T.Program>[] = [
  {
    field: 'sponsoringAgency',
    type: FieldTypeEnum.String,
    label: 'Sponsoring Agency',
  },
  {
    field: 'type',
    type: FieldTypeEnum.Enumeration,
    label: 'Type',
    options: typeOptions,
  },
  {
    field: 'dateStart',
    type: FieldTypeEnum.Date,
    label: 'Date Started',
  },
  {
    field: 'dateEnd',
    type: FieldTypeEnum.Date,
    label: 'Date Ended',
  },
]
