import DataTable from '@/components/data-table'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useAnnualInfoList } from '../hooks'

export function AnnualInfoListView() {
  const {
    columns,
    rows,
    tableDispatch,
    tableState,
    listResponse,
    totalRows,
    onClickCreate,
  } = useAnnualInfoList()
  return (
    <Box>
      <div className="grid grid-cols-12 gap-4 pb-4">
        <div className="col-span-full md:col-span-4 flex items-center">
          <Button variant="contained" color="primary" onClick={onClickCreate}>
            Create Annual Info
          </Button>
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
    </Box>
  )
}
