import {
  BulkDataTableAction,
  DataTableAction,
  DataTableColumn,
  DataTableFilter,
  Identifiable,
} from '@/components/data-table/types'
import { useTableState } from '@/components/data-table/use-table-state'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import * as Urql from 'urql'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useSearch } from './use-search.hook'
import transformFilter from '../utils/transform-filter'
import * as Types from '@/lib/generated/graphql.types'
import { OrderBy } from '@/lib/generated/graphql.types'

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
    [key in string]: OrderBy
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
  bulkActions?: BulkDataTableAction[]
  actions?: DataTableAction<QueryResponse>[]
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
  baseUrl?: string
  additionalTypenames?: string[]
}

export function useListViewHook<
  QueryResponse extends Identifiable,
  QueryVariables extends Record<string, any>,
  T extends Identifiable
>(props: UseListViewProps<QueryResponse, QueryVariables, T>) {
  const {
    useListQueryHook,
    listQueryVariables,
    columns,
    onEdit,
    onDelete,
    filters,
    bulkActions = [],
    additionalTypenames = [],
    actions,
  } = props
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

  const context = useMemo(() => ({ additionalTypenames }), [])

  const [listResponse] = useListQueryHook({
    context,
    variables: {
      limit: tableState.size,
      offset: tableState.page * tableState.size,
      orderBy: {
        createdAt: OrderBy.Desc,
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

  useEffect(() => {
    tableDispatch({
      type: 'SetSelected',
      payload: [],
    })
  }, [listResponse?.data, tableDispatch])

  const defaultActions = useMemo(() => {
    const actions: DataTableAction<QueryResponse>[] = [
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
    if (onDelete) {
      actions.push({
        label: 'Delete',
        icon: DeleteIcon,
        onClick: (row) => onDelete(row.id),
      })
    }
    return actions
  }, [onEdit, onDelete, baseUrl])

  return {
    tableProps: {
      tableState,
      tableDispatch,
      rows,
      totalRows: listResponse?.data?.meta?.aggregate?.count || 0,
      isLoading: listResponse.fetching,
      columns,
      actions: actions || defaultActions,
      bulkActions,
    },
    filters,
    baseUrl: router.asPath,
    onSearchChanged,
  }
}
