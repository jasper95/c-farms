import React from 'react'
import clsx from 'clsx'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useSidebarStore } from '@/shared/stores/sidebar'
import { DRAWER_WIDTH } from './constants'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      zIndex: theme.zIndex.drawer + 1,
    },
    appBarOpen: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(3),
    },
    menuButtonHidden: {
      display: 'none',
    },
  })
)

export default function Header() {
  const classes = useStyles()
  const { sidbarOpened: open, toggleSidebar } = useSidebarStore()
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('xs'))
  return (
    <AppBar
      elevation={0}
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarOpen]: open && !isSmall,
      })}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSidebar}
          className={clsx(classes.menuButton, {
            [classes.menuButtonHidden]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
