import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import DatatableListView from '@/components/views/datatable-list.view'
import { useEditDialogHook } from '@/lib/hooks/use-edit-dialog.hook'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import {
  useCreateCommodityMutation,
  useUpdateCommodityMutation,
} from '@/modules/commodity/api/mutations'
import {
  useCommodityDetailsQuery,
  useCommodityListQuery,
} from '@/modules/commodity/api/queries'
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

  const { onClickEdit } = useEditDialogHook({
    schema: commoditySchema,
    useDetailsQueryHook: useCommodityDetailsQuery,
    useMutationHook: useUpdateCommodityMutation,
    name: 'Commodity',
    component: CommodityForm,
  })

  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Commodity' }]} />
      <DatatableListView
        listQueryVariables={{}}
        onCreate={onClickCreate}
        onEdit={onClickEdit}
        useListQueryHook={useCommodityListQuery}
        columns={commodityListColumns}
        name="Commodity"
      />
    </Dashboard>
  )
}
