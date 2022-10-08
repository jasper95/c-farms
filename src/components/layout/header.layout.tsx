import React from 'react'
import { styled } from '@mui/material/styles'
import clsx from 'clsx'
import { Theme } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useSidebarStore } from '@/lib/stores/sidebar'
import { DRAWER_WIDTH } from './constants'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export default function Header() {
  const { sidbarOpened: open, toggleSidebar } = useSidebarStore()
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'))
  return (
    <AppBar elevation={0} position="fixed" open={open}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSidebar}
          sx={{
            marginRight: 1,
            ...(open && { display: 'none' }),
          }}
          size="large"
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
