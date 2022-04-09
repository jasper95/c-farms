import React from 'react'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import Link from '@/components/link'

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
    icon: PeopleIcon,
    primaryText: 'Users',
    path: '/users',
  },
  // {
  //   icon: SettingsIcon,
  //   primaryText: 'Settings',
  //   path: '/app/settings',
  // },
  // {
  //   icon: AssetsIcon,
  //   primaryText: 'Assets',
  //   path: '/app/assets',
  // },
] as const

export default function Menu() {
  // const location = useLocation()
  return (
    <List>
      {menuItems.map((item) => (
        <ListItem
          key={item.path}
          selected={false}
          component={Link}
          naked
          href={item.path}
          button
        >
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.primaryText} />
        </ListItem>
      ))}
    </List>
  )
}
