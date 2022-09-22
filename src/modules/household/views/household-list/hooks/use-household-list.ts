import { useTableState } from '@/components/data-table/use-table-state'
import { useHouseHoldListQuery } from '@/modules/household/api/queries'
import { HOUSE_LIST_COLUMNS } from '@/modules/household/constants'
import { useSearch } from '@/shared/hooks/use-search.hook'
import { useEffect } from 'react'

export function useHouseholdList() {
  const [tableState, tableDispatch] = useTableState()
  const { onSearchChanged } = useSearch({ initialSearch: '' })

  const [response] = useHouseHoldListQuery({
    variables: {
      // where: {},
      limit: tableState.size,
      offset: tableState.page * tableState.size,
    },
  })

  const count = response?.data?.householdList?.meta?.count || 0
  const rows = response?.data?.householdList?.data || []
  useEffect(() => {
    tableDispatch({
      type: 'SetTotal',
      payload: count,
    })
  }, [count, tableDispatch])

  return [
    {
      tableState,
      columns: HOUSE_LIST_COLUMNS,
      rows,
      loading: response.fetching,
      error: response.error,
    },
    {
      onSearchChanged,
      tableDispatch,
    },
  ] as const
}
