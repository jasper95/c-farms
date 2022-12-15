import { DataTableColumn } from '@/components/data-table/types'
import { CommodityListQuery } from '@/modules/commodity/api/queries'

export const commodityListColumns: DataTableColumn<
  CommodityListQuery['list'][0]
>[] = [
  {
    title: 'Name',
    accessor: 'name',
    sortable: true,
  },
  {
    title: 'Type',
    accessor: 'commodityType',
  },
  {
    title: 'Unit',
    accessor: 'unit',
  },
]
