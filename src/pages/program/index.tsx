import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import DatatableListView from '@/components/views/datatable-list.view'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import { useCreateProgramMutation } from '@/modules/program/api/mutations'
import { useProgramListQuery } from '@/modules/program/api/queries'
import ProgramForm from '@/modules/program/components/program-form.component'
import { programListColumns, programSchema } from '@/modules/program/constants'

export default function ProgramListPage() {
  const { onClickCreate } = useNewDialogHook({
    component: ProgramForm,
    schema: programSchema,
    useMutationHook: useCreateProgramMutation,
    name: 'Program',
    transform: ({ dateRange, ...a }) => ({
      ...a,
      dateStart: dateRange[0],
      dateEnd: dateRange[1],
    }),
  })

  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Program' }]} />
      <DatatableListView
        listQueryVariables={{}}
        useListQueryHook={useProgramListQuery}
        columns={programListColumns}
        name="Program"
        onCreate={onClickCreate}
      />
    </Dashboard>
  )
}
