import { useHouseholdOptionsQuery } from '@/modules/farm/api/queries'
import { useMemo } from 'react'

export function useFarmFormHook() {
  const [householdListOptionsResponse] = useHouseholdOptionsQuery()
  const householdOptions = useMemo(() => {
    return (
      householdListOptionsResponse.data?.list.map((household) => ({
        label: [household.firstName, household.lastName].join(' '),
        value: household.id,
      })) ?? []
    )
  }, [householdListOptionsResponse.data])
  return {
    householdOptions,
  }
}
