import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import DatatableListView from '@/components/views/datatable-list.view'
import { useEditDialogHook } from '@/lib/hooks/use-edit-dialog.hook'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import {
  useCreateProgramMutation,
  useUpdateProgramMutation,
} from '@/modules/program/api/mutations'
import {
  useProgramDetailsQuery,
  useProgramListQuery,
} from '@/modules/program/api/queries'
import ProgramForm from '@/modules/program/components/program-form.component'
import { programListColumns, programSchema } from '@/modules/program/constants'
import { programListFilters } from '../constants/program-list-filters'

const name = 'Program'
export function ProgramListView() {
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
  })

  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name }]} />
      <DatatableListView
        listQueryVariables={{}}
        useListQueryHook={useProgramListQuery}
        columns={programListColumns}
        name="Program"
        onCreate={onClickCreate}
        filters={programListFilters}
      />
    </Dashboard>
  )
}
