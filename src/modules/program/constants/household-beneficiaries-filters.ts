import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'

export const programBeneficiariesListFilters: DataTableFilter<T.ProgramBeneficiaries>[] =
  [
    {
      field: 'grossAnnualIncomeFarming',
      type: FieldTypeEnum.Number,
      label: 'Gross Annual Income Farming',
    },
    {
      field: 'farmSize',
      type: FieldTypeEnum.String,
      label: 'Farm Size(ha)',
    },
    {
      field: 'grossAnnualIncomeNonfarming',
      type: FieldTypeEnum.Number,
      label: 'Gross Annual Income Nonfarming',
    },
    {
      field: 'barangay',
      type: FieldTypeEnum.String,
      label: 'Barangay',
    },
  ]
