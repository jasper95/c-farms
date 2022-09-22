import { useTableState } from '@/components/data-table/use-table-state'
import { useHouseholdListQuery } from '@/modules/household/api/queries'
import { HOUSE_LIST_COLUMNS } from '@/modules/household/constants'
import { useSearch } from '@/shared/hooks/use-search.hook'

export function useHouseholdList() {
  const [tableState, tableDispatch] = useTableState()
  const { onSearchChanged } = useSearch({ initialSearch: '' })

  const [listResponse] = useHouseholdListQuery({
    variables: {
      // where: {},
      limit: tableState.size,
      offset: tableState.page * tableState.size,
    },
  })

  return {
    onSearchChanged,
    tableState,
    tableDispatch,
    rows: listResponse?.data?.householdList?.data || [],
    totalRows: listResponse?.data?.householdList?.meta?.count || 0,
    columns: HOUSE_LIST_COLUMNS,
    listResponse,
  }
}
