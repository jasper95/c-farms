import Breadcrumbs from '@/components/breadcrumbs'
import Button from '@mui/material/Button'
import SearchBar from '@/components/search-bar'
import Link from '@/components/link'
import DataTable from '@/components/data-table'
import useProgramList from '@/modules/program/hooks/use-program-list.hook'
import { Dashboard } from '@/components/layout/dashboard.layout'
import DatatableListView from '@/components/views/datatable-list.view'
import { useProgramListQuery } from '@/modules/program/api/queries'
import { programListColumns } from '@/modules/program/constants'

export default function ProgramListPage() {
  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Household' }]} />
      <DatatableListView
        listQueryVariables={{}}
        uselistQueryHook={useProgramListQuery}
        columns={programListColumns}
        name="Program"
      />
    </Dashboard>
  )
}
