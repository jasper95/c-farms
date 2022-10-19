import { DataTableColumn } from '@/components/data-table/types'
import { UserListQuery } from '@/modules/user/api/queries'

export const userListColumns: DataTableColumn<UserListQuery['list'][0]>[] = [
  {
    title: 'Firstname',
    accessor: 'firstName',
  },
  {
    title: 'Lastname',
    accessor: 'lastName',
  },
  {
    title: 'Username',
    accessor: 'username',
  },
  {
    title: 'Role',
    accessor: 'role',
  },
  {
    title: 'Active',
    type: 'function',
    fn: (row) => (row.active ? 'Active' : 'Suspended'),
    sortable: false,
  },
]
