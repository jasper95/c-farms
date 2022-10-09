import {
  DataTableAction,
  DataTableColumn,
  Identifiable,
} from '@/components/data-table/types'
import { useTableState } from '@/components/data-table/use-table-state'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import * as Urql from 'urql'
import EditIcon from '@mui/icons-material/Edit'
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
  onEdit?: (id: string) => void
  baseUrl?: string
}

export function useListViewHook<
  QueryResponse extends Identifiable,
  QueryVariables
>(props: UseListViewProps<QueryResponse, QueryVariables>) {
  const { useListQueryHook, listQueryVariables, columns, onEdit } = props
  const [tableState, tableDispatch] = useTableState()
  const router = useRouter()
  const baseUrl = props.baseUrl || router.asPath
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

  const actions: DataTableAction<QueryResponse>[] = useMemo(() => {
    return [
      {
        label: 'Edit',
        icon: EditIcon,
        ...(onEdit && {
          onClick: (row) => onEdit?.(row.id),
        }),
        ...(!onEdit &&
          baseUrl && {
            type: 'link',
            href: (row) => `${baseUrl}/${row.id}`,
          }),
      },
    ]
  }, [onEdit, baseUrl])

  return {
    tableProps: {
      tableState,
      tableDispatch,
      rows,
      totalRows: listResponse?.data?.meta?.aggregate?.count || 0,
      isLoading: listResponse.fetching,
      columns,
      actions,
    },
    baseUrl: router.asPath,
    onSearchChanged,
  }
}
