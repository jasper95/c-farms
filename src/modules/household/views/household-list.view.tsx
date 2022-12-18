import Breadcrumbs from '@/components/breadcrumbs'
import getDashboardLayout from '@/components/layout/dashboard.layout'
import {
  householdExportColumns,
  householdListColumns,
  householdListFilters,
} from '@/modules/household/constants'
import { useHouseholdViewListQuery } from '@/modules/household/api/queries'
import DatatableListView from '@/components/views/datatable-list.view'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'
import { withAuthorization } from '@/lib/hocs/with-authorization'

function View() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: 'Household' }]} />
      <DatatableListView
        listQueryVariables={{}}
        useListQueryHook={useHouseholdViewListQuery}
        columns={householdListColumns}
        name={ResourceEnum.Household}
        filters={householdListFilters}
        exportFields={householdExportColumns}
        searchFields={['referenceNo', 'name']}
      />
    </>
  )
}
export const HouseholdListView: PageProps = withAuthorization({
  resource: ResourceEnum.Household,
  permission: PermissionEnum.Read,
})(View)

HouseholdListView.getLayout = getDashboardLayout
