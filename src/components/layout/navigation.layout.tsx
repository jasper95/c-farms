import { useSidebarStore } from '@/shared/stores/sidebar'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import clsx from 'clsx'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NavigationMenu from './navigation-menu.layout'
import { DRAWER_WIDTH } from './constants'

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      boxShadow: `inset 0px -1px 0px #F4F5F6`,
    },
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: DRAWER_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
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
  })
)
export default function Navigation() {
  const { sidbarOpened: open, toggleSidebar } = useSidebarStore()
  const classes = useStyles()
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('xs'))
  return (
    <Drawer
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
        <IconButton onClick={toggleSidebar}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <NavigationMenu />
    </Drawer>
  )
}
