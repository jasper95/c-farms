import { useSidebarStore } from '@/shared/stores/sidebar'
import { styled } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import clsx from 'clsx'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import NavigationMenu from './navigation-menu.layout'
import { DRAWER_WIDTH } from './constants'

const PREFIX = 'navigation'

const classes = {
  toolbar: `${PREFIX}-toolbar`,
  drawer: `${PREFIX}-drawer`,
  drawerOpen: `${PREFIX}-drawerOpen`,
  drawerClose: `${PREFIX}-drawerClose`,
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  [`& .${classes.toolbar}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    boxShadow: `inset 0px -1px 0px #F4F5F6`,
  },

  [`&.${classes.drawer}`]: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },

  [`&.${classes.drawerOpen}`]: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  [`&.${classes.drawerClose}`]: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
}))

export default function Navigation() {
  const { sidbarOpened: open, toggleSidebar } = useSidebarStore()

  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'))
  return (
    <StyledDrawer
      variant={isSmall ? 'temporary' : 'permanent'}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
      onClose={toggleSidebar}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={toggleSidebar} size="large">
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <NavigationMenu />
    </StyledDrawer>
  )
}
