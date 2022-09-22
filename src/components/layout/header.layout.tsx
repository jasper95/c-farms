import React from 'react'
import { styled } from '@mui/material/styles'
import clsx from 'clsx'
import { Theme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useSidebarStore } from '@/shared/stores/sidebar'
import { DRAWER_WIDTH } from './constants'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const PREFIX = 'header'

const classes = {
  appBar: `${PREFIX}-appBar`,
  appBarOpen: `${PREFIX}-appBarOpen`,
  menuButton: `${PREFIX}-menuButton`,
  menuButtonHidden: `${PREFIX}-menuButtonHidden`,
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [`&.${classes.appBar}`]: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: theme.zIndex.drawer + 1,
  },

  [`&.${classes.appBarOpen}`]: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(3),
  },

  [`& .${classes.menuButtonHidden}`]: {
    display: 'none',
  },
}))

export default function Header() {
  const { sidbarOpened: open, toggleSidebar } = useSidebarStore()
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'))
  return (
    <StyledAppBar
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
          size="large"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Mini variant drawer
        </Typography>
      </Toolbar>
    </StyledAppBar>
  )
}
