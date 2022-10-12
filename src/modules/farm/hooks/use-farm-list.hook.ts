import { useListViewHook } from '@/lib/hooks/use-list-view.hook'
import { useMemo } from 'react'
import { useFarmListQuery } from '@/modules/farm/api/queries'

export function useFarmListHook() {
  const listHookResponse = useListViewHook({
    useListQueryHook: useFarmListQuery,
    listQueryVariables: {},
    columns: [],
  })

  const { tableProps } = listHookResponse
  const layers = useMemo(
    () => tableProps.rows.map((row) => row.location),
    [tableProps.rows]
  )
  return {
    ...listHookResponse,
    layers,
  }
}
