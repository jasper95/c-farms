import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import DatatableListView from '@/components/views/datatable-list.view'
import { useCommodityListQuery } from '@/modules/commodity/api/queries'
import { commodityListColumns } from '@/modules/commodity/constants'
import { useCommodityList } from '@/modules/commodity/hooks/commodity-list.view'

export default function CommodityListPage() {
  const { onClickCreate } = useCommodityList()

  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Commodity' }]} />
      <DatatableListView
        listQueryVariables={{}}
        onCreate={onClickCreate}
        useListQueryHook={useCommodityListQuery}
        columns={commodityListColumns}
        name="Commodity"
      />
    </Dashboard>
  )
}
