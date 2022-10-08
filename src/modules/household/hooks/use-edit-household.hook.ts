import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { HouseholdDetailsRoutesEnum } from '@/modules/household/enums'
import { householdDetailsTab } from '../constants'

export function useEditHousehold() {
  const router = useRouter()
  const { id, tab = HouseholdDetailsRoutesEnum.Primary } = router.query
  const crumbs = useMemo(() => {
    const initial = [{ name: 'Household' }, { name: 'Details' }]
    const currentTab = householdDetailsTab.find((e) => e.value === tab)
    if (currentTab?.value !== HouseholdDetailsRoutesEnum.Primary) {
      initial.push({
        name: `${currentTab?.label}`,
      })
    }
    return initial
  }, [tab])

  return {
    crumbs,
    tab,
    id,
  }
}
