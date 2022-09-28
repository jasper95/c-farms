import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Grid from '@mui/material/Grid'
import range from 'lodash/range'
import { getRandomInt } from '@/shared/utils/general'
import TableRow from '@mui/material/TableRow'
import { StyledTableCell } from './column'

type ITablePreloaderProps = {
  columns: number
  rows: number
}
export default function TablePreloader(props: ITablePreloaderProps) {
  const { columns, rows } = props
  const child = React.useMemo(
    () => (
      <>
        {range(0, rows).map((row) => (
          <TableRow key={row}>
            {range(0, columns).map((col) => (
              <StyledTableCell key={col}>
                <Skeleton variant="text" width={`${getRandomInt(80, 100)}%`} />
              </StyledTableCell>
            ))}
          </TableRow>
        ))}
      </>
    ),
    []
  )
  return child
}
