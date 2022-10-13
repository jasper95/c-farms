import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import DatatableListView from '@/components/views/datatable-list.view'
import { useEditDialogHook } from '@/lib/hooks/use-edit-dialog.hook'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import {
  useCreateAssociationMutation,
  useUpdateAssociationMutation,
} from '@/modules/association/api/mutations'
import {
  useAssociationDetailsQuery,
  useAssociationListQuery,
} from '../api/queries'
import AssociationForm from '../components/association-form.component'
import { associationListColumns, associationSchema } from '../constants'

const name = 'Assocation'
export function AssociationListView() {
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

  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name }]} />
      <DatatableListView
        listQueryVariables={{}}
        useListQueryHook={useAssociationListQuery}
        columns={associationListColumns}
        name="Association"
        onCreate={onClickCreate}
        onEdit={onClickEdit}
      />
    </Dashboard>
  )
}
