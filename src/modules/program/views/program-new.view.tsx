import Breadcrumbs from '@/components/breadcrumbs'
import Dashboard from '@/components/layout/dashboard.layout'
import { FormToolbar } from '@/components/form-toolbar'
import { useProgramNew } from '@/modules/program/hooks'
import ProgramForm from '@/modules/program/components/program-form.component'

export function ProgramNewView() {
  const { programFormProps, onSave } = useProgramNew()
  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Program' }, { name: 'New Program' }]} />
      <ProgramForm formProps={programFormProps} />
      <FormToolbar onCancel={() => {}} onConfirm={onSave} />
    </Dashboard>
  )
}
