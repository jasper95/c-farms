import { DataTableAction, DataTableColumn } from '@/components/data-table/types'
import EditIcon from '@mui/icons-material/Edit'
import { HouseholdListQuery } from '@/modules/household/api/queries'

export type HouseholdListRow = HouseholdListQuery['list'][0]
export const houseListActions: DataTableAction<HouseholdListRow>[] = [
  {
    label: 'Edit',
    icon: EditIcon,
    type: 'link',
    href: (row) => `/household/${row.id}`,
  },
]
export const householdListColumns: DataTableColumn<HouseholdListRow>[] = [
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
    actions: houseListActions,
  },
]
