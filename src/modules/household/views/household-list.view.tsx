import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import {
  householdListColumns,
  householdListFilters,
} from '@/modules/household/constants'
import { useHouseholdListQuery } from '@/modules/household/api/queries'
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
        filters={householdListFilters}
      />
    </Dashboard>
  )
}
