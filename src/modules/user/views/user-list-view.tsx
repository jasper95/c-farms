import Breadcrumbs from '@/components/breadcrumbs'
import getDashboardLayout, {
  Dashboard,
} from '@/components/layout/dashboard.layout'
import DatatableListView from '@/components/views/datatable-list.view'
import { withAuthorization } from '@/lib/hocs/with-authorization'
import { useEditDialogHook } from '@/lib/hooks/use-edit-dialog.hook'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from '@/modules/user/api/mutations'
import { useUserDetailsQuery, useUserListQuery } from '../api/queries'
import UserForm from '../components/user-form.component'
import { userListColumns, userSchema } from '../constants'

function View() {
  const name = 'user'
  const { onClickCreate } = useNewDialogHook({
    component: UserForm,
    schema: userSchema,
    useMutationHook: useCreateUserMutation,
    name,
  })
  const { onClickEdit } = useEditDialogHook({
    schema: userSchema,
    useDetailsQueryHook: useUserDetailsQuery,
    useMutationHook: useUpdateUserMutation,
    name,
    component: UserForm,
  })
  return (
    <>
      <Breadcrumbs crumbs={[{ name }]} />
      <DatatableListView
        listQueryVariables={{}}
        useListQueryHook={useUserListQuery}
        columns={userListColumns}
        name={ResourceEnum.User}
        onCreate={onClickCreate}
        onEdit={onClickEdit}
      />
    </>
  )
}

export const UserListView: PageProps = withAuthorization({
  resource: ResourceEnum.User,
  permission: PermissionEnum.Read,
})(View)

UserListView.getLayout = getDashboardLayout
