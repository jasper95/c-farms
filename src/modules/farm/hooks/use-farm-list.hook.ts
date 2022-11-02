import { useListViewHook } from '@/lib/hooks/use-list-view.hook'
import { useMemo } from 'react'
import { useFarmListQuery } from '@/modules/farm/api/queries'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'

export function useFarmListHook() {
  const listHookResponse = useListViewHook({
    useListQueryHook: useFarmListQuery,
    listQueryVariables: {},
    columns: [],
    name: ResourceEnum.Farm,
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
