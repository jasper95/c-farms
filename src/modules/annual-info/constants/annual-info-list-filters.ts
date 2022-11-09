import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'
import { livelihoodOptions } from '@/modules/household/constants'

export const annualInfoListFilters: DataTableFilter<T.AnnualInfo>[] = [
  {
    field: 'year',
    type: FieldTypeEnum.Number,
    label: 'Year',
  },
  {
    field: 'mainLivelihood',
    type: FieldTypeEnum.EnumerationMultiple,
    options: livelihoodOptions,
    label: 'Main Livelihood',
  },
  {
    field: 'grossAnnualIncomeFarming',
    type: FieldTypeEnum.Number,
    label: 'Annual Income Farming',
  },
  {
    field: 'grossAnnualIncomeNonfarming',
    type: FieldTypeEnum.Number,
    label: 'Annual Income Non-farming',
  },
]
