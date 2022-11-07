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
  useCreateAssociationMutation,
  useDeleteAssociationMutation,
  useUpdateAssociationMutation,
} from '@/modules/association/api/mutations'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'
import {
  useAssociationDetailsQuery,
  useAssociationListQuery,
} from '../api/queries'
import AssociationForm from '../components/association-form.component'
import { associationListColumns, associationSchema } from '../constants'
import { associationExportColumns } from '../constants/association-export-columns'

const name = 'Association'
function View() {
  const { onClickCreate } = useNewDialogHook({
    component: AssociationForm,
    schema: associationSchema,
    useMutationHook: useCreateAssociationMutation,
    name,
  })
  const { onClickEdit } = useEditDialogHook({
    schema: associationSchema,
    useDetailsQueryHook: useAssociationDetailsQuery,
    useMutationHook: useUpdateAssociationMutation,
    name,
    component: AssociationForm,
  })
  const { onClickDelete } = useDeleteDialogHook({
    name,
    useMutationHook: useDeleteAssociationMutation,
  })

  return (
    <>
      <Breadcrumbs crumbs={[{ name }]} />
      <DatatableListView
        listQueryVariables={{}}
        useListQueryHook={useAssociationListQuery}
        columns={associationListColumns}
        name={ResourceEnum.Association}
        onCreate={onClickCreate}
        onEdit={onClickEdit}
        onDelete={onClickDelete}
        exportFields={associationExportColumns}
      />
    </>
  )
}

export const AssociationListView: PageProps = withAuthorization({
  resource: ResourceEnum.Association,
  permission: PermissionEnum.Read,
})(View)

AssociationListView.getLayout = getDashboardLayout
