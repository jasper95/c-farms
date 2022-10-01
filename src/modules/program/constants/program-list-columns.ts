import { ColumnType } from '@/components/data-table/types'
import { ProgramListQuery } from '@/modules/program/api/queries'

export const PROGRAM_LIST_COLUMNS: ColumnType<
  ProgramListQuery['programList']['data'][0]
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
