import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import { useFarmListQuery } from '@/modules/farm/api/queries'
import DatatableListView from '@/components/views/datatable-list.view'
import { farmListColumns } from '../constants'
import {
  FarmMapTableComponent,
  FarmMapTableCustomActions,
} from '../components/farm-map-table.component'

export function FarmListView() {
  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Farm' }]} />
      <DatatableListView
        listQueryVariables={{}}
        useListQueryHook={useFarmListQuery}
        columns={farmListColumns}
        component={FarmMapTableComponent}
        customActions={FarmMapTableCustomActions}
        name="Farm"
      />
    </Dashboard>
  )
}
