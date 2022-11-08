import { DataTableColumn } from '@/components/data-table/types'
import { HouseholdListQuery } from '@/modules/household/api/queries'

export type HouseholdListRow = HouseholdListQuery['list'][0]
export const householdListColumns: DataTableColumn<HouseholdListRow>[] = [
  {
    title: 'Reference No',
    accessor: 'referenceNo',
    sortable: true,
  },
  {
    title: 'Name',
    accessor: 'lastName',
    type: 'function',
    fn: (row) => [row.firstName, row.lastName].join(' '),
    sortable: true,
  },
  {
    title: 'Barangay',
    accessor: 'barangay',
    sortable: true,
  },
]
