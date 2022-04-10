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

  useEffect(() => {
    tableDispatch({
      type: 'SetTotal',
      payload: response?.data?.pagination?.aggregate?.count || 0,
    })
  }, [response?.data?.pagination?.aggregate?.count, tableDispatch])

  return [
    {
      tableState,
      columns: HOUSE_LIST_COLUMNS,
      rows: response.data?.result ?? [],
      loading: response.fetching,
      error: response.error,
    },
    {
      onSearchChanged,
      tableDispatch,
    },
  ] as const
}
