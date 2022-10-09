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

const name = 'Program'
export default function ProgramListPage() {
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
  const { onClickEdit } = useEditDialogHook({
    schema: programSchema,
    useDetailsQueryHook: useProgramDetailsQuery,
    useMutationHook: useUpdateProgramMutation,
    name,
    component: ProgramForm,
    transformResponse: ({ dateStart, dateEnd, ...restProps }) =>
      programSchema.unknown().cast({
        dateRange: [new Date(dateStart), new Date(dateEnd)],
        ...restProps,
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
        onEdit={onClickEdit}
      />
    </Dashboard>
  )
}
