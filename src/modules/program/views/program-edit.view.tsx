import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import { DetailsTabsLayout } from '@/components/layout/details-tabs.layout'
import { useDetailsTabsCrumbs } from '@/lib/hooks/use-details-details-tabs-crumbs'
import { Beneficiaries, EditProgramDetails } from '@/modules/program/components'
import { programDetailsTabs } from '@/modules/program/constants/program-details-tabs'
import { ProgramDetailsRoutesEnum } from '@/modules/program/enums'

const name = 'Program'

export function ProgramEditView() {
  const { crumbs, tab } = useDetailsTabsCrumbs({
    tabs: programDetailsTabs,
    name,
  })
  return (
    <Dashboard>
      <Breadcrumbs crumbs={crumbs} />
      <DetailsTabsLayout tabs={programDetailsTabs}>
        {tab === ProgramDetailsRoutesEnum.Details && <EditProgramDetails />}
        {tab === ProgramDetailsRoutesEnum.Beneficiaries && <Beneficiaries />}
      </DetailsTabsLayout>
    </Dashboard>
  )
}
