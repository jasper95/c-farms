import { DataTableColumn } from '@/components/data-table/types'
import { AssociationListQuery } from '@/modules/association/api/queries'

export const associationListColumns: DataTableColumn<
  AssociationListQuery['list'][0]
>[] = [
  {
    title: 'Name',
    accessor: 'shortName',
  },
  {
    title: 'Status',
    type: 'function',
    fn: (row) => (row.active ? 'Active' : 'Inactive'),
    sortable: false,
  },
]
