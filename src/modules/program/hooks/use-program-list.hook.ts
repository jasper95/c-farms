import { useTableState } from '@/components/data-table/use-table-state'
import { useProgramListQuery } from '@/modules/program/api/queries'
import { useSearch } from '@/shared/hooks/use-search.hook'
import { PROGRAM_LIST_COLUMNS } from '@/modules/program/constants'

export default function useProgramList() {
  const [tableState, tableDispatch] = useTableState()
  const { onSearchChanged } = useSearch({ initialSearch: '' })

  const [listResponse] = useProgramListQuery({
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
    rows: listResponse?.data?.programList?.data || [],
    totalRows: listResponse?.data?.programList?.meta?.count || 0,
    columns: PROGRAM_LIST_COLUMNS,
    listResponse,
  }
}