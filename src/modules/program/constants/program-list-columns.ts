import { DataTableColumn } from '@/components/data-table/types'
import { ProgramListQuery } from '@/modules/program/api/queries'
import { format } from 'date-fns'

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
  {
    title: 'Date Started',
    type: 'function',
    fn: (row) => format(new Date(row.dateStart), 'MMM dd, yyyy'),
    sortable: true,
  },
  {
    title: 'Date Ended',
    type: 'function',
    fn: (row) => format(new Date(row.dateEnd), 'MMM dd, yyyy'),
    sortable: true,
  },
]
