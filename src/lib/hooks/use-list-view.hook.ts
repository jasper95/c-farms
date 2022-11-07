import {
  BulkDataTableAction,
  DataTableAction,
  DataTableColumn,
  DataTableFilter,
  Identifiable,
} from '@/components/data-table/types'
import { useTableState } from '@/components/data-table/use-table-state'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import * as Urql from 'urql'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useSearch } from './use-search.hook'
import transformFilter, {
  transformSearchFilter,
} from '../utils/transform-filter'
import * as Types from '@/lib/generated/graphql.types'
import { OrderBy } from '@/lib/generated/graphql.types'
import { useAuthStore } from '../stores/auth.store'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { exportCsv } from '../utils/exporter'

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

export type ExportOf<T> = (keyof T)[]

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
  name: string
  exportFields?: ExportOf<QueryResponse>
  searchFields?: (keyof QueryResponse)[]
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
    name,
    exportFields,
    searchFields,
  } = props
  const [tableState, tableDispatch] = useTableState()
  const { ability } = useAuthStore()
  const router = useRouter()
  const baseUrl = props.baseUrl || router.asPath
  const { onSearchChanged, searchValue } = useSearch({
    initialSearch: (router.query?.search || '') as string,
  })
  const userFilters = useMemo(
    () => transformFilter(tableState.filters),
    [tableState.filters]
  )

  const searchFilters = useMemo(() => {
    if (searchFields && searchValue) {
      return transformSearchFilter(searchValue, searchFields as string[])
    }
    return []
  }, [searchFields, searchValue])

  const sort = useMemo(() => {
    const [currentSort] = tableState.sort
    if (currentSort) {
      return {
        [currentSort.column]:
          currentSort.direction === 'asc' ? OrderBy.Asc : OrderBy.Desc,
      }
    }
    return {
      createdAt: OrderBy.Desc,
    }
  }, [tableState])

  const context = useMemo(() => ({ additionalTypenames }), [])

  const [listResponse] = useListQueryHook({
    context,
    variables: {
      limit: tableState.size,
      offset: tableState.page * tableState.size,
      orderBy: sort,
      where: {
        ...listQueryVariables,
        ...(searchFilters.length && {
          _or: searchFilters,
        }),
        _and: userFilters,
      },
    },
  })

  const [{ data: exportedData }, fetchAll] = useListQueryHook({
    pause: true,
  })

  // dirty work-around
  const [triggerDownload, setTriggerDownload] = useState(false)

  useEffect(() => {
    if (exportedData && exportFields && triggerDownload) {
      exportCsv(exportedData.list, exportFields as string[], name)
      setTriggerDownload(false)
    }
  }, [exportedData, exportFields, name, triggerDownload, setTriggerDownload])

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

  const { canCreate, canDelete, canEdit } = useMemo(
    () => ({
      canCreate: ability?.can(PermissionEnum.Create, name),
      canDelete: ability?.can(PermissionEnum.Delete, name),
      canEdit: ability?.can(PermissionEnum.Update, name),
    }),
    [ability, name]
  )

  const onExport = useCallback(() => {
    fetchAll({
      where: {
        ...listQueryVariables,
        _and: userFilters,
      },
    })
    setTriggerDownload(true)
  }, [fetchAll, listQueryVariables, userFilters, setTriggerDownload])

  const defaultActions = useMemo(() => {
    const actions: DataTableAction<QueryResponse>[] = []
    if (canEdit) {
      actions.push({
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
      })
    }
    if (canDelete && onDelete) {
      actions.push({
        label: 'Delete',
        icon: DeleteIcon,
        onClick: (row) => onDelete(row.id),
      })
    }
    return actions
  }, [onEdit, onDelete, baseUrl, canEdit, canDelete])

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
    canCreate,
    onExport: exportFields ? onExport : undefined,
  }
}
