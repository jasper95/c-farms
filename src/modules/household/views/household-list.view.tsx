import Breadcrumbs from '@/components/breadcrumbs'
import Button from '@mui/material/Button'
import SearchBar from '@/components/search-bar'
import Link from '@/components/link'
import DataTable from '@/components/data-table'
import { Dashboard } from '@/components/layout/dashboard.layout'
import { useListViewHook } from '@/lib/hooks/use-list-view.hook'
import { householdListColumns } from '../constants'
import { useHouseholdListQuery } from '../api/queries'
import DatatableListView from '@/components/views/datatable-list.view'

export function HouseholdListView() {
  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Household' }]} />
      <DatatableListView
        listQueryVariables={{}}
        useListQueryHook={useHouseholdListQuery}
        columns={householdListColumns}
        name="Household"
      />
    </Dashboard>
  )
}
