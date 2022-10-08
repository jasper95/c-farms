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
    pick(props, 'listQueryVariables', 'useListQueryHook', 'columns')
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
      <div className="grid grid-cols-12 gap-4 pb-4">
        {!readOnly && (
          <div className="col-span-full md:col-span-4 flex items-center">
            <Button {...buttonProps} variant="contained" color="primary">
              Create {name}
            </Button>
          </div>
        )}
        <div className="col-span-full col-start-0 md:col-span-4 md:col-start-9">
          <SearchBar onChange={onSearchChanged} />
        </div>
      </div>
      <DataTable {...tableProps} showPagination />
    </Box>
  )
}
