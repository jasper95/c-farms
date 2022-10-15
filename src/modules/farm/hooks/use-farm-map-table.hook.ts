import { DataTableProps } from '@/components/data-table/types'
import { OrderBy } from '@/lib/generated/graphql.types'
import transformFilter from '@/lib/utils/transform-filter'
import { useMemo } from 'react'
import { useFarmListQuery } from '../api/queries'
import { FarmListRowInterface } from '../interfaces'

interface UseFarmMapTableHookProps
  extends Pick<
    DataTableProps<FarmListRowInterface>,
    'tableState' | 'tableDispatch'
  > {}
export function useFarmMapTableHook(props: UseFarmMapTableHookProps) {
  const { tableState, tableDispatch } = props
  const userFilters = useMemo(
    () => transformFilter(tableState?.filters ?? []),
    [tableState?.filters]
  )
  const [listResponse] = useFarmListQuery({
    variables: {
      orderBy: {
        createdAt: OrderBy.Desc,
      },
      where: {
        _and: userFilters,
      },
    },
  })
  const layers = useMemo(
    () => listResponse?.data?.list?.map((row) => row.location) ?? [],
    [listResponse?.data]
  )

  return {
    popupData: listResponse?.data?.list,
    layers,
  }
}
