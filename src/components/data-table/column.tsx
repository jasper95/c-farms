import React from 'react'
import { styled } from '@mui/material/styles'
import get from 'lodash/get'
import { RowProp } from './types'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Link from '@/components/link'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'

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
    const filteredActions = actions.filter((action) => {
      if (action.conditionalRendering) {
        return action.conditionalRendering(row)
      }
      return true
    })
    if (filteredActions.length > 0) {
      children = (
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                {...bindTrigger(popupState)}
              >
                <MoreHorizIcon />
              </IconButton>
              <Menu {...bindMenu(popupState)}>
                {filteredActions.map(
                  ({
                    label,
                    icon: Icon = () => null,
                    type,
                    href = () => '',
                    onClick = () => {},
                  }) => (
                    <MenuItem
                      key={label}
                      onClick={(event) => {
                        event.stopPropagation()
                        if (onClick) {
                          onClick(row)
                        }
                        popupState.close()
                      }}
                      {...(type === 'link' && {
                        component: Link,
                        href: href(row),
                      })}
                    >
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText primary={label} />
                    </MenuItem>
                  )
                )}
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      )
    } else {
      children = null
    }
  } else if (type === 'component') {
    children = <Cell index={index} row={row} {...componentProps} />
  } else if (type === 'function') {
    children = fn(row, index)
  } else {
    children = `${get(row, accessor)}`
  }

  return <StyledTableCell {...bodyProps}>{children}</StyledTableCell>
}

export default Column
