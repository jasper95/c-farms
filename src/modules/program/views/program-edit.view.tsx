import Breadcrumbs from '@/components/breadcrumbs'
import getDashboardLayout from '@/components/layout/dashboard.layout'
import { DetailsTabsLayout } from '@/components/layout/details-tabs.layout'
import { useDetailsTabsCrumbs } from '@/lib/hooks/use-details-details-tabs-crumbs'
import { Beneficiaries, EditProgramDetails } from '@/modules/program/components'
import { programDetailsTabs } from '@/modules/program/constants/program-details-tabs'
import { ProgramDetailsRoutesEnum } from '@/modules/program/enums'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'
import { withAuthorization } from '@/lib/hocs/with-authorization'

function View() {
  const name = 'Program'

  const { crumbs, tab } = useDetailsTabsCrumbs({
    tabs: programDetailsTabs,
    name,
  })
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <DetailsTabsLayout tabs={programDetailsTabs}>
        {tab === ProgramDetailsRoutesEnum.Details && <EditProgramDetails />}
        {tab === ProgramDetailsRoutesEnum.Beneficiaries && <Beneficiaries />}
      </DetailsTabsLayout>
    </>
  )
}

export const ProgramEditView: PageProps = withAuthorization({
  resource: ResourceEnum.Program,
  permission: PermissionEnum.Read,
})(View)

ProgramEditView.getLayout = getDashboardLayout
