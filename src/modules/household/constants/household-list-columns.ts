import { DataTableColumn } from '@/components/data-table/types'
import { HouseholdViewListQuery } from '@/modules/household/api/queries'

export type HouseholdListRow = HouseholdViewListQuery['list'][0]
export const householdListColumns: DataTableColumn<HouseholdListRow>[] = [
  {
    title: 'Reference No',
    accessor: 'referenceNo',
    sortable: true,
  },
  {
    title: 'Name',
    accessor: 'name',
    sortable: true,
  },
  {
    title: 'Barangay',
    accessor: 'barangay',
    sortable: true,
  },
  {
    title: 'Main Livelihood',
    type: 'function',
    fn: (row) => (row.mainLivelihood ? row.mainLivelihood.join(', ') : ''),
    sortable: true,
  },
]
