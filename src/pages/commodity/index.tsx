import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import DatatableListView from '@/components/views/datatable-list.view'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import { useCreateCommodityMutation } from '@/modules/commodity/api/mutations'
import { useCommodityListQuery } from '@/modules/commodity/api/queries'
import {
  commodityListColumns,
  commoditySchema,
} from '@/modules/commodity/constants'
import dynamic from 'next/dynamic'

const AddCommodityDialog = dynamic(
  () => import('@/modules/commodity/components/commodity-dialog.component')
)

export default function CommodityListPage() {
  const { onClickCreate } = useNewDialogHook({
    component: AddCommodityDialog,
    schema: commoditySchema,
    name: 'Commodity',
    useMutationHook: useCreateCommodityMutation,
  })

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
