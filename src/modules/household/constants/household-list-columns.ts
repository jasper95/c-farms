import { ColumnType } from '@/components/data-table/types'
import { HouseHoldListQuery } from '@/modules/household/api/queries'

export const HOUSE_LIST_COLUMNS: ColumnType<HouseHoldListQuery['result'][0]>[] =
  [
    {
      title: 'Reference No',
      accessor: 'reference_no',
      sortable: false,
    },
    {
      title: 'Name',
      type: 'function',
      fn: (row) => [row.fname, row.lname].join(' '),
      sortable: false,
    },
    {
      title: 'Barangay',
      accessor: 'barangay',
    },
  ]
