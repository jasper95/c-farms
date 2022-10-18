import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import DatatableListView from '@/components/views/datatable-list.view'
import { useEditDialogHook } from '@/lib/hooks/use-edit-dialog.hook'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from '@/modules/user/api/mutations'
import { useUserDetailsQuery, useUserListQuery } from '../api/queries'
import UserForm from '../components/user-form.component'
import { userListColumns, userSchema } from '../constants'

const name = 'User'
export function UserListView() {
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
    <Dashboard>
      <Breadcrumbs crumbs={[{ name }]} />
      <DatatableListView
        listQueryVariables={{}}
        useListQueryHook={useUserListQuery}
        columns={userListColumns}
        name="User"
        onCreate={onClickCreate}
        onEdit={onClickEdit}
      />
    </Dashboard>
  )
}
