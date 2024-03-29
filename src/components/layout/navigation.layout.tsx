import { useSidebarStore } from '@/lib/stores/sidebar'
import { CSSObject, styled, useTheme } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MenuIcon from '@mui/icons-material/Menu'
import NavigationMenu from './navigation-menu.layout'
import { DRAWER_WIDTH } from './constants'
import { Logo } from './logo'

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  boxShadow: `inset 0px -1px 0px #F4F5F6`,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

export default function Navigation() {
  const { sidbarOpened: open, toggleSidebar } = useSidebarStore()
  const theme = useTheme()
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'))
  return (
    <Drawer
      variant={isSmall ? 'temporary' : 'permanent'}
      open={open}
      onClose={toggleSidebar}
      PaperProps={{
        sx: {
          bgcolor: 'background.default',
          borderRightStyle: 'dashed',
        },
      }}
    >
      <DrawerHeader>
        {open && <Logo />}
        <IconButton onClick={toggleSidebar}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </DrawerHeader>
      <NavigationMenu />
    </Drawer>
  )
}
