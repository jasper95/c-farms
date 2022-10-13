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
  },
  {
    title: 'Farm',
    accessor: 'farmName',
  },
  {
    title: 'Commodity',
    accessor: 'commodityName',
  },
  {
    title: 'Organic',
    type: 'function',
    fn: (row) => (row.organicPractitioner ? 'YES' : 'NO'),
    sortable: false,
  },
  {
    title: 'Produce',
    accessor: 'produce',
  },
]
