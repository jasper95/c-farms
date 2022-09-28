import Breadcrumbs from '@/components/breadcrumbs'
import Button from '@mui/material/Button'
import SearchBar from '@/components/search-bar'
import Link from '@/components/link'
import DataTable from '@/components/data-table'
import { useHouseholdList } from '@/modules/household/hooks'
import getDashboardLayout, {
  Dashboard,
} from '@/components/layout/dashboard.layout'

export default function HouseholdListView() {
  const {
    columns,
    rows,
    tableDispatch,
    tableState,
    onSearchChanged,
    listResponse,
    totalRows,
  } = useHouseholdList()
  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Household' }]} />
      <div className="grid grid-cols-12 gap-4 pb-4">
        <div className="col-span-full md:col-span-4 flex items-center">
          <Link href={'/household/new'}>
            <Button variant="contained" color="primary">
              Create Household
            </Button>
          </Link>
        </div>
        <div className="col-span-full col-start-0 md:col-span-4 md:col-start-9">
          <SearchBar onChange={onSearchChanged} />
        </div>
      </div>
      <DataTable
        columns={columns}
        tableDispatch={tableDispatch}
        tableState={tableState}
        totalRows={totalRows}
        rows={rows}
        showPagination
        loading={listResponse.fetching}
      />
    </Dashboard>
  )
}
