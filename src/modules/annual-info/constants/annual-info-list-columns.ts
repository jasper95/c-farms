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
    title: 'Income (Php)',
    type: 'function',
    fn: (row) =>
      `${parseFloat(
        row.grossAnnualIncomeFarming + row.grossAnnualIncomeNonfarming
      )
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        .toString()}`,
  },
  {
    title: 'Livelihood',
    type: 'function',
    fn: (row) => row.mainLivelihood.join(', '),
  },
]
