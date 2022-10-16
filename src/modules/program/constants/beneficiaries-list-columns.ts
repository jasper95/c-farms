import { DataTableColumn } from '@/components/data-table/types'
import { BeneficiariesListRow } from '../interfaces/beneficiares-list-row'

export const beneficiariesListColumns: DataTableColumn<BeneficiariesListRow>[] =
  [
    {
      title: 'Household',
      type: 'function',
      fn: (row) => [row.firstName, row.lastName].join(' '),
    },
    {
      title: 'Farm Size',
      type: 'function',
      fn: (row) => `${row.farmSize} ha`,
    },
    {
      title: 'Farming Income',
      accessor: 'grossAnnualIncomeFarming',
    },
    {
      title: 'Non-farming Income',
      accessor: 'grossAnnualIncomeNonfarming',
    },
    {
      title: 'Barangay',
      accessor: 'barangay',
    },
  ]
