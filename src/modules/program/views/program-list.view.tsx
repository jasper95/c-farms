import Breadcrumbs from '@/components/breadcrumbs'
import getDashboardLayout, {
  Dashboard,
} from '@/components/layout/dashboard.layout'
import DatatableListView from '@/components/views/datatable-list.view'
import { withAuthorization } from '@/lib/hocs/with-authorization'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import {
  useCreateProgramMutation,
  useDeleteProgramMutation,
} from '@/modules/program/api/mutations'
import { useProgramListQuery } from '@/modules/program/api/queries'
import ProgramForm from '@/modules/program/components/program-form.component'
import { programListColumns, programSchema } from '@/modules/program/constants'
import { programListFilters } from '@/modules/program/constants/program-list-filters'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'
import { useDeleteDialogHook } from '@/lib/hooks/use-delete-dialog.hook'
import { programExportColumns } from '../constants/program-export-columns'

const name = 'Program'
function View() {
  const { onClickCreate } = useNewDialogHook({
    component: ProgramForm,
    schema: programSchema,
    useMutationHook: useCreateProgramMutation,
    name,
    transform: ({ dateRange, ...a }) => ({
      ...a,
      dateStart: dateRange[0],
      dateEnd: dateRange[1],
    }),
    additionalTypenames: ['Program'],
  })

  const { onClickDelete } = useDeleteDialogHook({
    name,
    useMutationHook: useDeleteProgramMutation,
    additionalTypenames: ['Program'],
  })

  return (
    <>
      <Breadcrumbs crumbs={[{ name }]} />
      <DatatableListView
        listQueryVariables={{}}
        useListQueryHook={useProgramListQuery}
        columns={programListColumns}
        name={ResourceEnum.Program}
        onCreate={onClickCreate}
        onDelete={onClickDelete}
        filters={programListFilters}
        additionalTypenames={['Program']}
        exportFields={programExportColumns}
        searchFields={['name', 'type', 'sponsoringAgency']}
      />
    </>
  )
}

export const ProgramListView: PageProps = withAuthorization({
  resource: ResourceEnum.Program,
  permission: PermissionEnum.Read,
})(View)

ProgramListView.getLayout = getDashboardLayout
