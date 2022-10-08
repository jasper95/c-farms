import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import DatatableListView from '@/components/views/datatable-list.view'
import { useProgramListQuery } from '@/modules/program/api/queries'
import { programListColumns } from '@/modules/program/constants'

export default function ProgramListPage() {
  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Program' }]} />
      <DatatableListView
        listQueryVariables={{}}
        useListQueryHook={useProgramListQuery}
        columns={programListColumns}
        name="Program"
      />
    </Dashboard>
  )
}
