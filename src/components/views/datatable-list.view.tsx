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
import Grid from '@mui/material/Unstable_Grid2'
import ListFilter from '@/components/list-filter'
import { FilterValuesList } from '@/components/list-filter/filter-values-list'

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
        {!readOnly && (
          <Grid
            sx={{ order: { sm: 2, sx: 1 } }}
            container
            alignItems={'center'}
            xsOffset="auto"
          >
            <Grid>
              <Button {...buttonProps} variant="contained" color="primary">
                Create {name}
              </Button>
            </Grid>
          </Grid>
        )}
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
      <DataTable {...tableProps} showPagination />
    </Box>
  )
}
