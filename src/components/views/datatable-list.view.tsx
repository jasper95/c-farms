import DataTable from '@/components/data-table'
import Link from '@/components/link'
import SearchBar from '@/components/search-bar'
import Button from '@mui/material/Button'
import {
  UseListViewProps,
  useListViewHook,
} from '@/lib/hooks/use-list-view.hook'
import { Identifiable } from '@/components/data-table/types'
import pick from 'lodash/pick'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ListFilter from '@/components/list-filter'
import { FilterValuesList } from '../list-filter/filter-values-list'

interface DatatableListViewProps<
  QueryResponse extends Identifiable,
  QueryVariables extends Record<string, any>,
  T extends Identifiable
> extends UseListViewProps<QueryResponse, QueryVariables, T> {
  name: string
  readOnly?: boolean
  onCreate?: () => void
}

export default function DatatableListView<
  QueryResponse extends Identifiable,
  QueryVariables extends Record<string, any>,
  T extends Identifiable
>(props: DatatableListViewProps<QueryResponse, QueryVariables, T>) {
  const { tableProps, onSearchChanged, baseUrl, filters } = useListViewHook(
    pick(
      props,
      'listQueryVariables',
      'useListQueryHook',
      'columns',
      'onEdit',
      'baseUrl',
      'filters'
    )
  )
  const { tableState, tableDispatch } = tableProps
  const { name, onCreate, readOnly } = props
  const buttonProps = onCreate
    ? {
        onClick: onCreate,
      }
    : {
        LinkComponent: Link,
        href: `${baseUrl}/new`,
      }
  return (
    <Box>
      <Grid sx={{ mb: 2 }} container alignItems="center" spacing={2}>
        <Grid item xs={12} md={8} lg={10}>
          <Grid container>
            <Grid item xs={12} md={12} lg={6}>
              <SearchBar onChange={onSearchChanged} />
            </Grid>
          </Grid>
        </Grid>
        {!readOnly && (
          <Grid item xs={12} md={4} lg={2}>
            <Grid container justifyContent="flex-end">
              <Button {...buttonProps} variant="contained" color="primary">
                Create {name}
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
      {filters && (
        <Grid container sx={{ mb: 2 }}>
          <Grid item xs={12} md={8} lg={10}>
            <ListFilter
              filterValues={tableState.filters}
              setFilterValues={(filters) =>
                tableDispatch({ type: 'SetFilters', payload: filters })
              }
              filters={filters}
            />
            <FilterValuesList
              filterValues={tableState.filters}
              setFilterValues={(filters) =>
                tableDispatch({ type: 'SetFilters', payload: filters })
              }
            />
          </Grid>
        </Grid>
      )}
      <DataTable {...tableProps} showPagination />
    </Box>
  )
}
