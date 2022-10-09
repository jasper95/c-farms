import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import DatatableListView from '@/components/views/datatable-list.view'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import { useCreateCommodityMutation } from '@/modules/commodity/api/mutations'
import { useCommodityListQuery } from '@/modules/commodity/api/queries'
import { CommodityForm } from '@/modules/commodity/components'
import {
  commodityListColumns,
  commoditySchema,
} from '@/modules/commodity/constants'

export default function CommodityListPage() {
  const { onClickCreate } = useNewDialogHook({
    component: CommodityForm,
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
