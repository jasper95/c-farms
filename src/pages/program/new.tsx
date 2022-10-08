import Breadcrumbs from '@/components/breadcrumbs'
import { FormToolbar } from '@/components/form-toolbar'
import ProgramForm from '@/modules/program/components/program-form.component'
import { Dashboard } from '@/components/layout/dashboard.layout'
import { useNewViewHook } from '@/lib/hooks/use-new-view.hook'
import { programSchema } from '@/modules/program/constants'
import { useCreateProgramMutation } from '@/modules/program/api/mutations'

export default function ProgramNewPage() {
  const { formProps, onSave, isMutating } = useNewViewHook({
    schema: programSchema,
    useMutationHook: useCreateProgramMutation,
    name: 'Program',
    transform: (a) => ({
      ...a,
      dateStart: a.dateRange[0],
      dateEnd: a.dateRange[1],
    }),
  })
  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Program' }, { name: 'New Program' }]} />
      <ProgramForm formProps={formProps} />
      <FormToolbar
        onCancel={() => {}}
        onConfirm={onSave}
        isLoading={isMutating}
      />
    </Dashboard>
  )
}
