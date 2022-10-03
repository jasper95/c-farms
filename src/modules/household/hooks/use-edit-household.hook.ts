import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useUpdateHouseholdMutation } from '../api/mutations'
import { useHouseholdDetailsQuery } from '../api/queries'

export function useEditHousehold() {
  const router = useRouter()
  const { tab = 'one', id } = router.query
  const detailsQueryResponse = useHouseholdDetailsQuery({
    variables: {
      id,
    },
  })
  const updateMutationResponse = useUpdateHouseholdMutation()
  const crumbs = useMemo(() => {
    const initial = [{ name: 'Household' }, { name: 'Details' }]
    if (tab !== 'one') {
      initial.push({
        name: `${tab}`,
      })
    }
    return initial
  }, [tab])

  return {
    detailsQueryResponse,
    crumbs,
    tab,
    updateMutationResponse,
    id,
  }
}
