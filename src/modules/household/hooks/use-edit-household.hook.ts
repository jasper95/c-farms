import { useRouter } from 'next/router'
import { useMemo } from 'react'

export function useEditHousehold() {
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

  return {
    crumbs,
    tab,
    id,
  }
}
