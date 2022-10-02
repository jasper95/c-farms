import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import {
  HouseholdDetails,
  HouseholdDetailsLayout,
} from '@/modules/household/components'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export function HouseholdDetailsView() {
  const router = useRouter()
  const { tab = 'one', id } = router.query
  const crumbs = useMemo(() => {
    const initial = [{ name: 'Household' }, { name: 'Details' }]
    if (tab !== 'one') {
      initial.push({
        name: `${tab}`,
      })
    }
    return initial
  }, [tab])
  return (
    <Dashboard>
      <Breadcrumbs crumbs={crumbs} />
      <HouseholdDetailsLayout>
        {tab === 'one' && <HouseholdDetails />}
        {tab === 'two' && 'Two'}
        {tab === 'three' && 'Three'}
      </HouseholdDetailsLayout>
    </Dashboard>
  )
}
