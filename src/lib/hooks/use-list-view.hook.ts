import { DataTableColumn, Identifiable } from '@/components/data-table/types'
import { useTableState } from '@/components/data-table/use-table-state'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import * as Urql from 'urql'
import { useSearch } from './use-search.hook'

export type BaseListQuery<ListRow> = {
  list: Array<ListRow>
  meta: {
    aggregate?: { count: number } | null | undefined
  }
}
export interface ListPagination {
  limit: number
  offset: number
  orderBy: {
    [key in string]:
      | 'ASC'
      | 'ASC_NULLS_FIRST'
      | 'ASC_NULLS_LAST'
      | 'DESC'
      | 'DESC_NULLS_FIRST'
      | 'DESC_NULLS_LAST'
  }
}
export interface UseListViewProps<
  QueryResponse extends Identifiable,
  QueryVariables
> {
  listQueryVariables: QueryVariables
  useListQueryHook(
    options?: Omit<Urql.UseQueryArgs<QueryVariables & ListPagination>, 'query'>
  ): Urql.UseQueryResponse<BaseListQuery<QueryResponse>, object>
  columns: DataTableColumn<QueryResponse>[]
}

export function useListViewHook<
  QueryResponse extends Identifiable,
  QueryVariables
>(props: UseListViewProps<QueryResponse, QueryVariables>) {
  const { useListQueryHook, listQueryVariables, columns } = props
  const [tableState, tableDispatch] = useTableState()
  const router = useRouter()
  const { onSearchChanged } = useSearch({
    initialSearch: (router.query?.search || '') as string,
  })
  const [listResponse] = useListQueryHook({
    variables: {
      limit: tableState.size,
      offset: tableState.page * tableState.size,
      orderBy: {
        createdAt: 'DESC',
      },
      ...listQueryVariables,
    },
  })

  const rows = useMemo(
    () => listResponse?.data?.list || [],
    [listResponse?.data]
  )

  return {
    tableProps: {
      tableState,
      tableDispatch,
      rows,
      totalRows: listResponse?.data?.meta?.aggregate?.count || 0,
      isLoading: listResponse.fetching,
      columns,
    },
    baseUrl: router.asPath,
    onSearchChanged,
  }
}
