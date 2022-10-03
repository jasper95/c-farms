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
  const { crumbs, tab, detailsQueryResponse, updateMutationResponse } =
    useEditHousehold()
  return (
    <Dashboard>
      <Breadcrumbs crumbs={crumbs} />
      <HouseholdDetailsLayout>
        {tab === 'one' && (
          <EditHouseholdDetails
            detailsQueryResponse={detailsQueryResponse}
            updateMutationResponse={updateMutationResponse}
          />
        )}
        {tab === 'two' && (
          <EditOtherDetails
            detailsQueryResponse={detailsQueryResponse}
            updateMutationResponse={updateMutationResponse}
          />
        )}
        {tab === 'three' && <AnnualInfoListView />}
      </HouseholdDetailsLayout>
    </Dashboard>
  )
}
