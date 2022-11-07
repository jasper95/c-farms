import React, { useMemo } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableSortLabel from '@mui/material/TableSortLabel'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
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
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const StyledToolbar = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  top: '0px',
  left: '0px',
  width: '100%',
  zIndex: '9',
  height: '58px',
  position: 'absolute',
  padding: theme.spacing(0, 6, 0, 0.5),
}))
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
    isSelectable,
    bulkActions = [],
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
  const allChecked = Boolean(
    tableState.selected.length > 0 && tableState.selected.length === rows.length
  )
  const someChecked = Boolean(
    tableState.selected.length > 0 && tableState.selected.length !== rows.length
  )
  return (
    <TableContainer component={Card}>
      {tableState.selected.length > 0 && (
        <StyledToolbar
          sx={{
            color: 'primary.main',
            bgcolor: 'primary.lighter',
          }}
        >
          <Checkbox
            color="primary"
            indeterminate={someChecked}
            checked={allChecked}
            onChange={handleMainCheckbox}
            inputProps={{}}
          />
          <Typography sx={{ flexGrow: 1 }} variant="subtitle1">
            {tableState.selected.length} selected
          </Typography>
          <Box>
            {bulkActions.map((action) => (
              <Tooltip key={action.label} title={action.label}>
                <IconButton
                  color="secondary"
                  onClick={() => action.onClick(tableState, tableDispatch)}
                >
                  <action.icon />
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </StyledToolbar>
      )}
      <Table>
        <TableHead>
          <TableRow>
            {isSelectable && (
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={someChecked}
                  checked={allChecked}
                  onChange={handleMainCheckbox}
                  inputProps={{}}
                />
              </TableCell>
            )}
            {columns
              .concat(additionalColumns)
              .map(({ title, accessor = '', sortable = true }, idx) => {
                const sorted = sortable
                  ? sort.find((e) => e.column === accessor)
                  : undefined
                return (
                  <TableCell
                    sortDirection={false}
                    key={`${String(accessor)}-${idx}`}
                  >
                    <TableSortLabel
                      hideSortIcon={!sortable}
                      active={Boolean(sorted)}
                      direction={sorted?.direction}
                      onClick={() => {
                        if (tableDispatch && sortable && accessor) {
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
              rows={tableState.size ?? 10}
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
                {isSelectable && (
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={tableState.selected.includes(row.id)}
                      onChange={(e, val: boolean) =>
                        handleRowCheckbox(row, val)
                      }
                      inputProps={{}}
                    />
                  </TableCell>
                )}
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
      {showPagination && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={totalRows}
          rowsPerPage={tableState.size}
          page={tableState.page}
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

  function handleMainCheckbox(
    event: React.ChangeEvent<HTMLInputElement>,
    val: boolean
  ) {
    tableDispatch({
      payload: val ? rows.map((e) => e.id) : [],
      type: 'SetSelected',
    })
  }

  function handleRowCheckbox(row: T, val: boolean) {
    const { selected } = tableState
    tableDispatch({
      payload: val
        ? [...selected, row.id]
        : selected.filter((e) => e !== row.id),
      type: 'SetSelected',
    })
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
