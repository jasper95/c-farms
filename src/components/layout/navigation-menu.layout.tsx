import React from 'react'
import List from '@material-ui/core/List'
import Tooltip from '@material-ui/core/Tooltip'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DashboardIcon from '@material-ui/icons/Dashboard'
import MapIcon from '@material-ui/icons/Map'
import PeopleIcon from '@material-ui/icons/People'
import Link from '@/components/link'
import { useSidebarStore } from '@/shared/stores/sidebar'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Theme } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

const menuItems = [
  {
    icon: DashboardIcon,
    primaryText: 'Dashboard',
    path: '/',
  },
  {
    icon: PeopleIcon,
    primaryText: 'Household',
    path: '/household',
  },
  {
    icon: MapIcon,
    primaryText: 'Map',
    path: '/map',
  },
] as const

export default function Menu() {
  const { toggleSidebar } = useSidebarStore()
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('xs'))
  const router = useRouter()

  return (
    <List>
      {menuItems.map((item) => (
        <Tooltip title={item.primaryText} key={item.path}>
          <ListItem
            selected={`${item.path}/`.indexOf(`${router.pathname}/`) === 0}
            component={Link}
            naked
            href={item.path}
            button
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
          </ListItem>
        </Tooltip>
      ))}
    </List>
  )
}
