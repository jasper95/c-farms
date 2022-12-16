import { DataTableColumn } from '@/components/data-table/types'
import { UserListQuery } from '@/modules/user/api/queries'

export const userListColumns: DataTableColumn<UserListQuery['list'][0]>[] = [
  {
    title: 'Name',
    accessor: 'name',
  },
  {
    title: 'Email',
    accessor: 'email',
  },
  {
    title: 'Role',
    accessor: 'role',
  },
  {
    title: 'Status',
    type: 'function',
    fn: (row) => (row.active ? 'Active' : 'Suspended'),
    sortable: false,
  },
]
