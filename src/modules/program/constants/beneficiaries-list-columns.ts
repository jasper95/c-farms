import { DataTableColumn } from '@/components/data-table/types'
import formatDate from '@/lib/utils/format-date'
import { BeneficiariesListRow } from '../interfaces/beneficiares-list-row'

export const beneficiariesListColumns: DataTableColumn<BeneficiariesListRow>[] =
  [
    {
      title: 'Household',
      type: 'function',
      fn: (row) => [row.firstName, row.lastName].join(' '),
    },
    {
      title: 'Barangay',
      accessor: 'barangay',
    },
    {
      title: 'Date Availed',
      type: 'function',
      fn: (row) => formatDate(new Date(row.createdAt)),
    },
  ]
