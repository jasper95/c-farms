import { DataTableColumn } from '@/components/data-table/types'
import { UnassignedAssociationListRow } from '@/modules/program/interfaces/unassigned-association-list-row'

export const unassignedAssociationListColumns: DataTableColumn<UnassignedAssociationListRow>[] =
  [
    {
      title: 'Name',
      accessor: 'name',
    },
    {
      title: 'Active',
      accessor: 'active',
    },
  ]
