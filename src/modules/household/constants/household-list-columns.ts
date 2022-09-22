import { ColumnType } from '@/components/data-table/types'
import { HouseholdListQuery } from '@/modules/household/api/queries'

export const HOUSE_LIST_COLUMNS: ColumnType<
  HouseholdListQuery['householdList']['data'][0]
>[] = [
  {
    title: 'Reference No',
    accessor: 'referenceNo',
    sortable: false,
  },
  {
    title: 'Name',
    type: 'function',
    fn: (row) => [row.firstName, row.lastName].join(' '),
    sortable: false,
  },
  {
    title: 'Barangay',
    accessor: 'barangay',
  },
]
