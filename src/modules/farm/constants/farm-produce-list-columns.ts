import { DataTableColumn } from '@/components/data-table/types'
import { CommodityProduceListQuery } from '@/modules/commodity-produce/api/queries'

export const farmProduceListColumns: DataTableColumn<
  CommodityProduceListQuery['list'][0]
>[] = [
  {
    title: 'Year',
    accessor: 'year',
  },
  {
    title: 'Commodity',
    accessor: 'commodityName',
  },
  {
    title: 'Area Used',
    accessor: 'areaUsed',
    type: 'function',
    fn: (row) =>
      `${parseFloat(row.areaUsed)
        .toFixed(2)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ha`,
  },
  {
    title: 'Organic',
    type: 'function',
    fn: (row) => (row.organicPractitioner ? 'YES' : 'NO'),
    sortable: false,
  },
  {
    title: 'Produce',
    type: 'function',
    fn: (row) =>
      row.commodityType === 'Livestock' || row.commodityType === 'Poultry'
        ? row.produce.toString().concat(' heads')
        : row.produce.toString().concat(' metric tons'),
    sortable: false,
  },
]
