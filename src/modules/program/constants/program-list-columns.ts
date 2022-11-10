import { DataTableColumn } from '@/components/data-table/types'
import { ProgramListQuery } from '@/modules/program/api/queries'

export type ProgramListRow = ProgramListQuery['list'][0]
export const programListColumns: DataTableColumn<ProgramListRow>[] = [
  {
    title: 'Name',
    accessor: 'name',
    sortable: true,
  },
  {
    title: 'Type',
    accessor: 'type',
    sortable: true,
  },
  {
    title: 'Sponsoring Agency',
    accessor: 'sponsoringAgency',
    sortable: true,
  },
]
