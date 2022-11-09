import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'
import { typeOptions } from '@/modules/commodity/constants/form-options'

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
    type: FieldTypeEnum.Enumeration,
    label: 'Type',
    options: typeOptions,
  },
  {
    field: 'organicPractitioner',
    type: FieldTypeEnum.Enumeration,
    label: 'Organic',
    options: [
      {
        label: 'Organic',
        value: 'True',
      },
      {
        label: 'Non-organic',
        value: 'False',
      },
    ],
  },
  {
    field: 'produce',
    label: 'Produce',
    type: FieldTypeEnum.Number,
  },
]
