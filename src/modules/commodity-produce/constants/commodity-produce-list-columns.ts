import { DataTableColumn } from '@/components/data-table/types'
import { CommodityProduceListQuery } from '@/modules/commodity-produce/api/queries'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

export const commodityProduceListColumns: DataTableColumn<
  CommodityProduceListQuery['list'][0]
>[] = [
  {
    title: 'Year',
    accessor: 'year',
    sortable: true,
  },
  {
    title: 'Farm',
    accessor: 'farmName',
  },
  {
    title: 'Commodity',
    accessor: 'commodityName',
    sortable: true,
  },
  {
    title: 'Organic',
    type: 'function',
    accessor: 'organicPractitioner',
    fn: (row) => (row.organicPractitioner ? 'YES' : 'NO'),
    sortable: false,
  },
  {
    title: 'Produce',
    type: 'function',
    accessor: 'produce',
    fn: (row) =>
      row.commodityType === 'Livestock'
        ? row.produce.toString().concat(' heads')
        : parseFloat(row.produce)
            .toFixed(2)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            .concat(' metric tons'),
    sortable: false,
  },
]
