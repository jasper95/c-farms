import { ColumnType } from '@/components/data-table/types'
import { AnnualInfoListQuery } from '../api/queries'

export const annualInfoListColumns: ColumnType<
  AnnualInfoListQuery['list'][0]
>[] = [
  {
    title: 'Year',
    accessor: 'year',
  },
  {
    title: 'Income',
    type: 'function',
    fn: (row) =>
      `${row.grossAnnualIncomeFarming + row.grossAnnualIncomeNonfarming}`,
  },
  {
    title: 'Livelihood',
    accessor: 'mainLivelihood',
  },
]
