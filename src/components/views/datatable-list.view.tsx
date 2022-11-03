import DataTable from '@/components/data-table'
import Link from '@/components/link'
import SearchBar from '@/components/search-bar'
import Button from '@mui/material/Button'
import {
  UseListViewProps,
  useListViewHook,
} from '@/lib/hooks/use-list-view.hook'
import { DataTableProps, Identifiable } from '@/components/data-table/types'
import pick from 'lodash/pick'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import ListFilter from '@/components/list-filter'
import { FilterValuesList } from '@/components/list-filter/filter-values-list'
import { ComponentType } from 'react'
import DownloadIcon from '@mui/icons-material/Download'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

interface DatatableListViewProps<
  QueryResponse extends Identifiable,
  QueryVariables extends Record<string, any>,
  T extends Identifiable
> extends UseListViewProps<QueryResponse, QueryVariables, T> {
  name: string
  withCreate?: boolean
  onCreate?: () => void
  component?: ComponentType<DataTableProps<QueryResponse>>
  isSelectable?: boolean
  customActions?: ComponentType<
    Pick<DataTableProps<QueryResponse>, 'tableDispatch' | 'tableState'>
  >
}

export default function DatatableListView<
  QueryResponse extends Identifiable,
  QueryVariables extends Record<string, any>,
  T extends Identifiable
>(props: DatatableListViewProps<QueryResponse, QueryVariables, T>) {
  const {
    component: ListComponent = DataTable,
    customActions: CustomActions = () => null,
    isSelectable,
  } = props
  const { tableProps, onSearchChanged, baseUrl, filters, canCreate } =
    useListViewHook(
      pick(
        props,
        'listQueryVariables',
        'useListQueryHook',
        'columns',
        'onEdit',
        'onDelete',
        'baseUrl',
        'filters',
        'bulkActions',
        'additionalTypenames',
        'actions',
        'name'
      )
    )
  const { tableState, tableDispatch } = tableProps
  const { name, onCreate, withCreate = true } = props
  return (
    <Box>
      <Grid sx={{ mb: 2 }} container spacing={2}>
        <Grid
          sx={{ order: { sm: 1, xs: 2 } }}
          alignItems="center"
          container
          xs={12}
          sm={6}
          lg={4}
        >
          <Grid xs={10}>
            <SearchBar onChange={onSearchChanged} />
          </Grid>
          {filters && (
            <Grid xs={2}>
              <ListFilter
                filterValues={tableState.filters}
                setFilterValues={(filters) =>
                  tableDispatch({ type: 'SetFilters', payload: filters })
                }
                filters={filters}
              />
            </Grid>
          )}
        </Grid>
        <Grid
          sx={{ order: { sm: 2, sx: 1 } }}
          container
          alignItems={'center'}
          xsOffset="auto"
        >
          <Grid>
            <CustomActions
              {...pick(tableProps, 'tableState', 'tableDispatch')}
            />
            <Tooltip title="Export">
              <IconButton sx={{ mr: 2 }}>
                <DownloadIcon />
              </IconButton>
            </Tooltip>
            {canCreate && withCreate && (
              <Button
                {...(onCreate
                  ? {
                      onClick: onCreate,
                    }
                  : {
                      LinkComponent: Link,
                      href: `${baseUrl}/new`,
                    })}
                variant="contained"
                color="primary"
              >
                Create {name}
              </Button>
            )}
          </Grid>
        </Grid>
        {filters && (
          <Grid xs={12} sx={{ order: { xs: 3 } }}>
            <FilterValuesList
              filterValues={tableState.filters}
              setFilterValues={(filters) =>
                tableDispatch({ type: 'SetFilters', payload: filters })
              }
            />
          </Grid>
        )}
      </Grid>
      <ListComponent
        {...tableProps}
        isSelectable={isSelectable}
        showPagination
      />
    </Box>
  )
}
