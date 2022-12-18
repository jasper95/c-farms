import { DataTableColumn } from '@/components/data-table/types'
import { FarmListRowInterface } from '../interfaces'

export const farmListColumns: DataTableColumn<FarmListRowInterface>[] = [
  {
    title: 'Name',
    accessor: 'name',
    sortable: true,
  },
  {
    title: 'Farming Household',
    type: 'function',
    accessor: 'lastName',
    fn: (row) => `${[row.firstName, row.lastName].join(' ')}`,
    sortable: false,
  },
  {
    title: 'Size (ha)',
    type: 'function',
    accessor: 'sizeInHaTotal',
    fn: (row) =>
      `${parseFloat(row.sizeInHaTotal)
        .toFixed(2)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
    sortable: true,
  },
  {
    title: 'Barangay',
    accessor: 'barangay',
    sortable: true,
  },
]
