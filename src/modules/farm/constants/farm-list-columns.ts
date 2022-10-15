import { DataTableColumn } from '@/components/data-table/types'
import { FarmListRowInterface } from '../interfaces'

export const farmListColumns: DataTableColumn<FarmListRowInterface>[] = [
  {
    title: 'Name',
    accessor: 'name',
    sortable: false,
  },
]
