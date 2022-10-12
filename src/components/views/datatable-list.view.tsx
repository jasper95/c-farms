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
import FilterListIcon from '@mui/icons-material/FilterList'

interface DatatableListViewProps<
  QueryResponse extends Identifiable,
  QueryVariables
> extends UseListViewProps<QueryResponse, QueryVariables> {
  name: string
  readOnly?: boolean
  onCreate?: () => void
}

export default function DatatableListView<
  QueryResponse extends Identifiable,
  QueryVariables
>(props: DatatableListViewProps<QueryResponse, QueryVariables>) {
  const { tableProps, onSearchChanged, baseUrl } = useListViewHook(
    pick(
      props,
      'listQueryVariables',
      'useListQueryHook',
      'columns',
      'onEdit',
      'baseUrl'
    )
  )
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
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={6}>
                <SearchBar onChange={onSearchChanged} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              justifyContent="flex-end"
              alignItems="center"
              xs={12}
            >
              <Button sx={{ mr: 1 }} startIcon={<FilterListIcon />}>
                Filter
              </Button>
              <Button {...buttonProps} variant="contained" color="primary">
                Create {name}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* <div className="grid grid-cols-12 gap-4 pb-4">
        <div className="col-span-full md:col-span-4 flex items-center">
          <SearchBar onChange={onSearchChanged} />
        </div>
        {!readOnly && (
          <div className="col-span-full col-start-0 md:col-span-4 md:col-start-9">
            <Button {...buttonProps} variant="contained" color="primary">
              Create {name}
            </Button>
          </div>
        )}
      </div> */}
      <DataTable {...tableProps} showPagination />
    </Box>
  )
}
