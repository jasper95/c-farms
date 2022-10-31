import { DataTableColumn } from '@/components/data-table/types'
import { CommodityListQuery } from '@/modules/commodity/api/queries'

export const commodityListColumns: DataTableColumn<
  CommodityListQuery['list'][0]
>[] = [
  {
    title: 'Commodity',
    accessor: 'name',
    sortable: false,
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
