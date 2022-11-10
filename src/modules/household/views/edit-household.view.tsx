import Breadcrumbs from '@/components/breadcrumbs'
import getDashboardLayout from '@/components/layout/dashboard.layout'
import { DetailsTabsLayout } from '@/components/layout/details-tabs.layout'
import { AnnualInfoListView } from '@/modules/annual-info/views'
import { CommodityProduceInventoryListView } from '@/modules/commodity-produce/views/commodity-produce-list.view'
import {
  EditHouseholdDetails,
  EditOtherDetails,
  HouseholdFarmList,
} from '@/modules/household/components'
import { HouseholdDetailsRoutesEnum } from '@/modules/household/enums'
import { householdDetailsTab } from '@/modules/household/constants'
import { useDetailsTabsCrumbs } from '@/lib/hooks/use-details-details-tabs-crumbs'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'
import { withAuthorization } from '@/lib/hocs/with-authorization'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'

function View() {
  const { crumbs, tab } = useDetailsTabsCrumbs({
    name: 'Household',
    tabs: householdDetailsTab,
  })
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <DetailsTabsLayout tabs={householdDetailsTab}>
        {tab === HouseholdDetailsRoutesEnum.Primary && <EditHouseholdDetails />}
        {tab === HouseholdDetailsRoutesEnum.Secondary && <EditOtherDetails />}
        {tab === HouseholdDetailsRoutesEnum.AnnualInfo && (
          <AnnualInfoListView />
        )}
        {tab === HouseholdDetailsRoutesEnum.Farm && <HouseholdFarmList />}
        {tab === HouseholdDetailsRoutesEnum.CommodityProduce && (
          <CommodityProduceInventoryListView />
        )}
      </DetailsTabsLayout>
    </>
  )
}

export const EditHouseholdView: PageProps = withAuthorization({
  permission: PermissionEnum.Read,
  resource: ResourceEnum.Household,
})(View)

EditHouseholdView.getLayout = getDashboardLayout
