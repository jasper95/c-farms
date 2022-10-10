import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import { AnnualInfoListView } from '@/modules/annual-info/views'
import { CommodityProduceInventoryListView } from '@/modules/commodity-produce-inventory/views/commodity-produce-inventory-list.view'
import {
  EditHouseholdDetails,
  HouseholdDetailsLayout,
  EditOtherDetails,
} from '@/modules/household/components'
import { HouseholdDetailsRoutesEnum } from '@/modules/household/enums'
import { useEditHousehold } from '@/modules/household/hooks'

export function EditHouseholdView() {
  const { crumbs, tab } = useEditHousehold()
  return (
    <Dashboard>
      <Breadcrumbs crumbs={crumbs} />
      <HouseholdDetailsLayout>
        {tab === HouseholdDetailsRoutesEnum.Primary && <EditHouseholdDetails />}
        {tab === HouseholdDetailsRoutesEnum.Secondary && <EditOtherDetails />}
        {tab === HouseholdDetailsRoutesEnum.AnnualInfo && (
          <AnnualInfoListView />
        )}
        {tab === HouseholdDetailsRoutesEnum.CommodityProduce && (
          <CommodityProduceInventoryListView />
        )}
      </HouseholdDetailsLayout>
    </Dashboard>
  )
}
