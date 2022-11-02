import { DataTableColumn } from '@/components/data-table/types'
import { FarmListRowInterface } from '../interfaces'

export const farmListColumns: DataTableColumn<FarmListRowInterface>[] = [
  {
    title: 'Name',
    accessor: 'name',
    sortable: false,
  },
  {
    title: 'Farming Household',
    type: 'function',
    fn: (row) =>
      `${[row.household.firstName, row.household.lastName].join(' ')}`,
    sortable: false,
  },
  {
    title: 'Size (ha)',
    type: 'function',
    fn: (row) =>
      `${parseFloat(row.sizeInHaTotal)
        .toFixed(2)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
  },
]
