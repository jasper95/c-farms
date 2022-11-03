import Breadcrumbs from '@/components/breadcrumbs'
import getDashboardLayout, {
  Dashboard,
} from '@/components/layout/dashboard.layout'
import { useFarmListQuery } from '@/modules/farm/api/queries'
import DatatableListView from '@/components/views/datatable-list.view'
import { farmListColumns } from '../constants'
import { FarmMapTableComponent, FarmMapTableActions } from '../components'
import { withAuthorization } from '@/lib/hocs/with-authorization'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'
import { useDeleteDialogHook } from '@/lib/hooks/use-delete-dialog.hook'
import { useDeleteFarmMutation } from '../api/mutations'

const name = 'Farm'
function View() {
  const { onClickDelete } = useDeleteDialogHook({
    name,
    useMutationHook: useDeleteFarmMutation,
  })

  return (
    <>
      <Breadcrumbs crumbs={[{ name: 'Farm' }]} />
      <DatatableListView
        listQueryVariables={{}}
        useListQueryHook={useFarmListQuery}
        columns={farmListColumns}
        component={FarmMapTableComponent}
        customActions={FarmMapTableActions}
        name={ResourceEnum.Farm}
        onDelete={onClickDelete}
      />
    </>
  )
}

export const FarmListView: PageProps = withAuthorization({
  resource: ResourceEnum.Farm,
  permission: PermissionEnum.Read,
})(View)

FarmListView.getLayout = getDashboardLayout
