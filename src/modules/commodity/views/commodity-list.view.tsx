import Breadcrumbs from '@/components/breadcrumbs'
import getDashboardLayout, {
  Dashboard,
} from '@/components/layout/dashboard.layout'
import DatatableListView from '@/components/views/datatable-list.view'
import { withAuthorization } from '@/lib/hocs/with-authorization'
import { useDeleteDialogHook } from '@/lib/hooks/use-delete-dialog.hook'
import { useEditDialogHook } from '@/lib/hooks/use-edit-dialog.hook'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import {
  useCreateCommodityMutation,
  useUpdateCommodityMutation,
  useDeleteCommodityMutation,
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
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'

function View() {
  const { onClickCreate } = useNewDialogHook({
    component: CommodityForm,
    schema: commoditySchema,
    name: 'Commodity',
    useMutationHook: useCreateCommodityMutation,
  })
  const { onClickDelete } = useDeleteDialogHook({
    useMutationHook: useDeleteCommodityMutation,
    name: '',
  })
  const { onClickEdit } = useEditDialogHook({
    schema: commoditySchema,
    useDetailsQueryHook: useCommodityDetailsQuery,
    useMutationHook: useUpdateCommodityMutation,
    name: 'Commodity',
    component: CommodityForm,
  })

  return (
    <>
      <Breadcrumbs crumbs={[{ name: 'Commodity' }]} />
      <DatatableListView
        listQueryVariables={{}}
        onCreate={onClickCreate}
        onEdit={onClickEdit}
        onDelete={onClickDelete}
        useListQueryHook={useCommodityListQuery}
        columns={commodityListColumns}
        name={ResourceEnum.Commodity}
      />
    </>
  )
}
export const CommodityListView: PageProps = withAuthorization({
  resource: ResourceEnum.Household,
  permission: PermissionEnum.Read,
})(View)

CommodityListView.getLayout = getDashboardLayout
