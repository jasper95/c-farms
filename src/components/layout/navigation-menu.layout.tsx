import React from 'react'
import List from '@mui/material/List'
import Tooltip from '@mui/material/Tooltip'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import DashboardIcon from '@mui/icons-material/Dashboard'
import MapIcon from '@mui/icons-material/Map'
import PeopleIcon from '@mui/icons-material/People'
import Link from '@/components/link'
import { useSidebarStore } from '@/lib/stores/sidebar'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import ListItemButton from '@mui/material/ListItemButton'
import ListAltIcon from '@mui/icons-material/ListAlt'
import GrassIcon from '@mui/icons-material/Grass'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const menuItems = [
  {
    icon: DashboardIcon,
    primaryText: 'Dashboard',
    path: '/',
  },
  {
    icon: AccountCircleIcon,
    primaryText: 'Household',
    path: '/household',
  },
  {
    icon: MapIcon,
    primaryText: 'Farm',
    path: '/farm',
  },
  {
    icon: ListAltIcon,
    primaryText: 'Program',
    path: '/program',
  },
  {
    icon: GrassIcon,
    primaryText: 'Commodity',
    path: '/commodity',
  },
  {
    icon: PeopleIcon,
    primaryText: 'Association',
    path: '/association',
  },
] as const

export default function Menu() {
  const { toggleSidebar } = useSidebarStore()
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'))
  const router = useRouter()

  return (
    <List disablePadding>
      {menuItems.map((item) => (
        <Tooltip title={item.primaryText} key={item.path} placement="right">
          <ListItem
            disablePadding
            selected={`${item.path}/`.indexOf(`${router.pathname}/`) === 0}
          >
            <ListItemButton
              component={Link}
              href={item.path}
              onClick={() => {
                if (isSmall) {
                  toggleSidebar()
                }
              }}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.primaryText} />
            </ListItemButton>
          </ListItem>
        </Tooltip>
      ))}
    </List>
  )
}
