import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import { DetailsTabsLayout } from '@/components/layout/details-tabs.layout'
import { useDetailsTabsCrumbs } from '@/lib/hooks/use-details-details-tabs-crumbs'
import { EditFarmDetails } from '../components/edit-farm-details.component'
import { farmDetailsTabs } from '../constants'
import { FarmDetailsRoutesEnum } from '../enums'

const name = 'Farm'

export function FarmEditView() {
  const { crumbs, tab } = useDetailsTabsCrumbs({
    tabs: farmDetailsTabs,
    name,
  })
  return (
    <Dashboard>
      <Breadcrumbs crumbs={crumbs} />
      <DetailsTabsLayout tabs={farmDetailsTabs}>
        {tab === FarmDetailsRoutesEnum.Details && <EditFarmDetails />}
      </DetailsTabsLayout>
    </Dashboard>
  )
}
