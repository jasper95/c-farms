import Breadcrumbs from '@/components/breadcrumbs'
import Button from '@mui/material/Button'
import SearchBar from '@/components/search-bar'
import Link from '@/components/link'
import DataTable from '@/components/data-table'
import useProgramList from '@/modules/program/hooks/use-program-list.hook'
import getDashboardLayout from '@/components/layout/dashboard.layout'

export default function ProgramListPage() {
  const {
    columns,
    rows,
    tableDispatch,
    tableState,
    onSearchChanged,
    listResponse,
    totalRows,
  } = useProgramList()
  return (
    <>
      <Breadcrumbs crumbs={[{ name: 'Program' }]} />
      <div className="grid grid-cols-12 gap-4 pb-4">
        <div className="col-span-full md:col-span-4 flex items-center">
          <Link href={'/program/new'}>
            <Button variant="contained" color="primary">
              Create Program
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
    </>
  )
}

ProgramListPage.getLayout = getDashboardLayout
