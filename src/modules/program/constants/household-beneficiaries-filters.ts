import { DataTableFilter } from '@/components/data-table/types'
import { FieldTypeEnum } from '@/components/list-filter/field-type.enum'
import * as T from '@/lib/generated/graphql.types'
import {
  CommodityListQuery,
  useCommodityListQuery,
} from '@/modules/commodity/api/queries'
import { livelihoodOptions } from '@/modules/household/constants'

export const programBeneficiariesListFilters: DataTableFilter<T.HouseholdPrograms>[] =
  [
    {
      field: 'grossAnnualIncomeFarming',
      type: FieldTypeEnum.Number,
      label: 'Gross Annual Income Farming',
    },
    {
      field: 'farmSize',
      type: FieldTypeEnum.Number,
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
    {
      field: 'commodities',
      type: FieldTypeEnum.EnumerationMultiple,
      label: 'Commodities',
      asyncProps: {
        useOptionsQueryHook: useCommodityListQuery,
        variables: {},
        transform: (data) =>
          data.map((e) => ({ label: e.name, value: e.name })),
      },
    },
    {
      field: 'mainLivelihood',
      type: FieldTypeEnum.EnumerationMultiple,
      options: livelihoodOptions,
      label: 'Main Livelihood',
    },
  ]
