import { DataTableColumn } from '@/components/data-table/types'
import { ProgramListQuery } from '@/modules/program/api/queries'

export const programListColumns: DataTableColumn<
  ProgramListQuery['list'][0]
>[] = [
  {
    title: 'Name',
    accessor: 'name',
    sortable: false,
  },
  {
    title: 'Type',
    accessor: 'type',
  },
]
