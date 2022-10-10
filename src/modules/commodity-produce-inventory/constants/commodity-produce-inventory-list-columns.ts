import { DataTableColumn } from '@/components/data-table/types'
import { CommodityProduceInventoryListQuery } from '../api/queries'

export const commodityProduceInventoryListColumns: DataTableColumn<
  CommodityProduceInventoryListQuery['list'][0]
>[] = [
  {
    title: 'Year',
    accessor: 'year',
  },
  {
    title: 'Farm',
    accessor: 'farm',
  },
  {
    title: 'Commodity',
    accessor: 'commodity',
  },
  {
    title: 'Organic',
    accessor: 'organicPractitioner',
  },
  {
    title: 'Produce',
    accessor: 'produce',
  },
]
