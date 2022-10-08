import { useTableState } from '@/components/data-table/use-table-state'
import { useProgramListQuery } from '@/modules/program/api/queries'
import { useSearch } from '@/lib/hooks/use-search.hook'
import { programListColumns as columns } from '@/modules/program/constants'

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
    rows: listResponse?.data?.list?.data || [],
    totalRows: listResponse?.data?.list?.meta?.count || 0,
    columns,
    listResponse,
  }
}
