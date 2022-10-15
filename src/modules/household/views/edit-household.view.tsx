import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import { DetailsTabsLayout } from '@/components/layout/details-tabs.layout'
import { AnnualInfoListView } from '@/modules/annual-info/views'
import { CommodityProduceInventoryListView } from '@/modules/commodity-produce/views/commodity-produce-list.view'
import {
  EditHouseholdDetails,
  EditOtherDetails,
} from '@/modules/household/components'
import { HouseholdDetailsRoutesEnum } from '@/modules/household/enums'
import { householdDetailsTab } from '@/modules/household/constants'
import { useDetailsTabsCrumbs } from '@/lib/hooks/use-details-details-tabs-crumbs'

export function EditHouseholdView() {
  const { crumbs, tab } = useDetailsTabsCrumbs({
    name: 'Household',
    tabs: householdDetailsTab,
  })
  return (
    <Dashboard>
      <Breadcrumbs crumbs={crumbs} />
      <DetailsTabsLayout tabs={householdDetailsTab}>
        {tab === HouseholdDetailsRoutesEnum.Primary && <EditHouseholdDetails />}
        {tab === HouseholdDetailsRoutesEnum.Secondary && <EditOtherDetails />}
        {tab === HouseholdDetailsRoutesEnum.AnnualInfo && (
          <AnnualInfoListView />
        )}
        {tab === HouseholdDetailsRoutesEnum.CommodityProduce && (
          <CommodityProduceInventoryListView />
        )}
      </DetailsTabsLayout>
    </Dashboard>
  )
}
