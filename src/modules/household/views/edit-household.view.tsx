import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import { AnnualInfoListView } from '@/modules/annual-info/views'
import {
  EditHouseholdDetails,
  HouseholdDetailsLayout,
  EditOtherDetails,
} from '@/modules/household/components'
import { useEditHousehold } from '../hooks'

export function EditHouseholdView() {
  const { crumbs, tab } = useEditHousehold()
  return (
    <Dashboard>
      <Breadcrumbs crumbs={crumbs} />
      <HouseholdDetailsLayout>
        {tab === 'one' && <EditHouseholdDetails />}
        {tab === 'two' && <EditOtherDetails />}
        {tab === 'three' && <AnnualInfoListView />}
      </HouseholdDetailsLayout>
    </Dashboard>
  )
}
