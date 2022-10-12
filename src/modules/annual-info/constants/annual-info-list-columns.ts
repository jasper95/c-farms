import { DataTableColumn } from '@/components/data-table/types'
import { AnnualInfoListQuery } from '@/modules/annual-info/api/queries'

export const annualInfoListColumns: DataTableColumn<
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
    type: 'function',
    fn: (row) => row.mainLivelihood.join(', '),
  },
]
