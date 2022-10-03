import { ColumnType } from '@/components/data-table/types'
import EditIcon from '@mui/icons-material/Edit'
import { HouseholdListQuery } from '@/modules/household/api/queries'

export const HOUSE_LIST_COLUMNS: ColumnType<
  HouseholdListQuery['list']['data'][0]
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
  {
    type: 'actions',
    actions: [
      {
        label: 'Edit',
        icon: EditIcon,
        type: 'link',
        href: (row) => `/household/${row.id}`,
      },
    ],
  },
]
