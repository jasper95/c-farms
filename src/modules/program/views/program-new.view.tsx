import Breadcrumbs from '@/components/breadcrumbs'
import { FormToolbar } from '@/components/form-toolbar'
import { useProgramNew } from '@/modules/program/hooks'
import ProgramForm from '@/modules/program/components/program-form.component'
import getDashboardLayout from '@/components/layout/dashboard.layout'

export function ProgramNewView() {
  const { programFormProps, onSave } = useProgramNew()
  return (
    <>
      <Breadcrumbs crumbs={[{ name: 'Program' }, { name: 'New Program' }]} />
      <ProgramForm formProps={programFormProps} />
      <FormToolbar onCancel={() => {}} onConfirm={onSave} />
    </>
  )
}

ProgramNewView.getLayout = getDashboardLayout
