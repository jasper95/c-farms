import { DataTableColumn } from '@/components/data-table/types'
import { AssociationListQuery } from '@/modules/association/api/queries'

export type AssociationListRow = AssociationListQuery['list'][0]
export const associationListColumns: DataTableColumn<AssociationListRow>[] = [
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
