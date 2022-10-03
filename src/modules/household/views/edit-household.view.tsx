import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import {
  EditHouseholdDetails,
  HouseholdDetailsLayout,
  EditOtherDetails,
} from '@/modules/household/components'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
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
        {tab === 'three' && 'Three'}
      </HouseholdDetailsLayout>
    </Dashboard>
  )
}
