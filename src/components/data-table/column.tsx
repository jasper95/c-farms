import React from 'react'
import { styled } from '@mui/material/styles'
import get from 'lodash/get'
import { RowProp } from './types'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { IconButton, Theme, Tooltip } from '@mui/material'

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))
function Column<T>(props: RowProp<T>) {
  const { row, column, index } = props
  const {
    type = 'default',
    accessor = '',
    bodyProps = {},
    actions = [],
    component: Cell = () => null,
    fn = () => null,
    componentProps = {},
    title,
  } = column
  let children
  if (type === 'actions') {
    children = (
      <div className="flex">
        {actions.map(
          ({
            label,
            className,
            icon,
            onClick = () => {},
            type: actionType = 'button',
            component: Action = () => null,
            conditionalRendering = (arg) => true,
          }) => {
            if (!conditionalRendering(row)) {
              return <span key={label} className="column-no-action" />
            }
            if (actionType === 'component') {
              return (
                <Action
                  key={label}
                  row={row}
                  label={label}
                  icon={icon}
                  onClick={onClick}
                />
              )
            }
            return (
              <Tooltip key={label} title={label}>
                <IconButton
                  className="p-2"
                  onClick={(e: any) => {
                    e.stopPropagation()
                    onClick(row)
                  }}
                  key={label}
                  size="large"
                >
                  {icon}
                </IconButton>
              </Tooltip>
            )
          }
        )}
      </div>
    )
  } else if (type === 'component') {
    children = <Cell index={index} row={row} {...componentProps} />
  } else if (type === 'function') {
    children = fn(row, index)
  } else {
    children = `${get(row, accessor)}`
  }

  return (
    <StyledTableCell {...bodyProps}>
      {children}
      {/* <div className="tableCell" data-header-title={title}>
      </div> */}
    </StyledTableCell>
  )
}

export default Column
