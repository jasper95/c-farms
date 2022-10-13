import {
  DataTableAction,
  DataTableColumn,
  DataTableFilter,
  Identifiable,
} from '@/components/data-table/types'
import { useTableState } from '@/components/data-table/use-table-state'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import * as Urql from 'urql'
import EditIcon from '@mui/icons-material/Edit'
import { useSearch } from './use-search.hook'
import transformFilter from '../utils/transform-filter'
import * as Types from '@/lib/generated/graphql.types'

export type BaseListQuery<ListRow> = {
  list: Array<ListRow>
  meta: {
    aggregate?: { count: number } | null | undefined
  }
}

export type BaseListVariables<T> = Types.Exact<{
  where?: Types.InputMaybe<T>
  limit?: number
  offset?: number
  orderBy?: {
    [key in string]:
      | 'ASC'
      | 'ASC_NULLS_FIRST'
      | 'ASC_NULLS_LAST'
      | 'DESC'
      | 'DESC_NULLS_FIRST'
      | 'DESC_NULLS_LAST'
  }
}>

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
  QueryVariables extends Record<string, any>,
  T extends Identifiable
> {
  listQueryVariables: QueryVariables
  useListQueryHook(
    options?: Omit<
      Urql.UseQueryArgs<BaseListVariables<QueryVariables>>,
      'query'
    >
  ): Urql.UseQueryResponse<BaseListQuery<QueryResponse>, object>
  columns: DataTableColumn<QueryResponse>[]
  filters?: DataTableFilter<T>[]
  onEdit?: (id: string) => void
  baseUrl?: string
}

export function useListViewHook<
  QueryResponse extends Identifiable,
  QueryVariables extends Record<string, any>,
  T extends Identifiable
>(props: UseListViewProps<QueryResponse, QueryVariables, T>) {
  const { useListQueryHook, listQueryVariables, columns, onEdit, filters } =
    props
  const [tableState, tableDispatch] = useTableState()
  const router = useRouter()
  const baseUrl = props.baseUrl || router.asPath
  const { onSearchChanged } = useSearch({
    initialSearch: (router.query?.search || '') as string,
  })
  const userFilters = useMemo(
    () => transformFilter(tableState.filters),
    [tableState.filters]
  )

  const [listResponse] = useListQueryHook({
    variables: {
      limit: tableState.size,
      offset: tableState.page * tableState.size,
      orderBy: {
        createdAt: 'DESC',
      },
      where: {
        ...listQueryVariables,
        _and: userFilters,
      },
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
    filters,
    baseUrl: router.asPath,
    onSearchChanged,
  }
}
