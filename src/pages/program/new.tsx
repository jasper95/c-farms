import Breadcrumbs from '@/components/breadcrumbs'
import { FormToolbar } from '@/components/form-toolbar'
import { useProgramNew } from '@/modules/program/hooks'
import ProgramForm from '@/modules/program/components/program-form.component'
import { Dashboard } from '@/components/layout/dashboard.layout'

export default function ProgramNewPage() {
  const { programFormProps, onSave } = useProgramNew()
  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Program' }, { name: 'New Program' }]} />
      <ProgramForm formProps={programFormProps} />
      <FormToolbar onCancel={() => {}} onConfirm={onSave} />
    </Dashboard>
  )
}
