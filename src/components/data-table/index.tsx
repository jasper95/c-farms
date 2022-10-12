import React, { Dispatch, useMemo } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableSortLabel from '@mui/material/TableSortLabel'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Card from '@mui/material/Card'
import {
  Identifiable,
  ColumnSort,
  DataTableColumn,
  DataTableProps,
} from './types'
import Column, { StyledTableCell } from './column'
import get from 'lodash/get'
import TablePreloader from './pre-loader'
import Typography from '@mui/material/Typography'

function DataTable<T extends Identifiable>(props: DataTableProps<T>) {
  const {
    rows,
    totalRows,
    columns: columnsProps,
    onRowClick,
    showPagination,
    tableState,
    tableDispatch,
    isLoading,
    rowClassName = () => '',
    checkedItems,
    actions = [],
  } = props
  const columns: DataTableColumn<T>[] = useMemo(() => {
    if (actions.length) {
      return [
        ...columnsProps,
        {
          type: 'actions',
          actions,
        },
      ]
    }
    return columnsProps
  }, [columnsProps, actions])
  const sort = get(tableState, 'sort', [])
  const additionalColumns: DataTableColumn<T>[] = []
  const isEmpty = !isLoading && rows.length === 0
  return (
    <TableContainer sx={{ overflowX: 'initial' }} component={Card}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns
              .concat(additionalColumns)
              .map(({ title, accessor = '', sortable = true }, idx) => {
                const sorted = sortable
                  ? sort.find((e) => e.column === accessor)
                  : undefined
                return (
                  <TableCell
                    sortDirection={sorted?.direction ?? false}
                    key={idx}
                  >
                    <TableSortLabel
                      hideSortIcon={!sortable}
                      active={Boolean(sorted)}
                      direction={sorted?.direction}
                      onClick={() => {
                        if (tableDispatch && sortable) {
                          const payload: ColumnSort = {
                            column: String(accessor),
                            direction:
                              !sorted || get(sorted, 'direction') === 'desc'
                                ? 'asc'
                                : 'desc',
                          }
                          tableDispatch({ type: 'SetSort', payload })
                        }
                      }}
                    >
                      {title}
                    </TableSortLabel>
                  </TableCell>
                )
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {isEmpty && (
            <TableRow>
              <StyledTableCell colSpan={columns.length}>
                <Typography variant="subtitle2" align="center">
                  No records found
                </Typography>
              </StyledTableCell>
            </TableRow>
          )}
          {isLoading && (
            <TablePreloader
              rows={tableState?.size ?? 10}
              columns={columns.length}
            />
          )}
          {!isLoading &&
            rows.map((row, rowIndex) => (
              <TableRow
                selected={checkedItems?.includes(`${row.id}`)}
                key={row.id}
                onClick={(e) => {
                  e.stopPropagation()
                  onRowClick(row)
                }}
                className={rowClassName(row)}
              >
                {columns.concat(additionalColumns).map((column, idx) => (
                  <Column
                    index={rowIndex}
                    key={idx}
                    column={column}
                    row={row}
                  />
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {showPagination && tableState && tableDispatch && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={totalRows}
          rowsPerPage={tableState?.size}
          page={tableState?.page}
          onPageChange={(_, payload) =>
            tableDispatch({ type: 'SetPage', payload })
          }
          onRowsPerPageChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            tableDispatch({
              type: 'SetSize',
              payload: Number(event.target.value),
            })
          }
        />
      )}
    </TableContainer>
  )

  // function handleCheck(val: boolean, event: React.ChangeEvent<HTMLInputElement>) {
  //   event.stopPropagation();
  //   const { id } = event.target;
  //   const index = rows.findIndex((e) => e.id === id);
  //   onRowToggle(index + 1, val);
  // }

  function onRowToggle(index: number, checked: boolean) {
    tableDispatch &&
      tableDispatch({ type: 'SetSelected', payload: { index, checked, rows } })
  }
}

DataTable.defaultProps = {
  className: '',
  onRowClick: () => {},
  onRowToggle: () => {},
  // selected: [],
  isSelectable: false,
  onSort: () => {},
  sort: [],
  checkedItems: [],
  pageSizes: [10, 50, 100, 250],
}

export default DataTable
