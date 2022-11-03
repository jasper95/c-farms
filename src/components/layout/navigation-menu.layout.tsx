import React from 'react'
import List from '@mui/material/List'
import Tooltip from '@mui/material/Tooltip'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Link from '@/components/link'
import { useSidebarStore } from '@/lib/stores/sidebar'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import ListItemButton from '@mui/material/ListItemButton'
import { useNavigationMenu } from './hooks/use-navigation-menu.hook'

export default function Menu() {
  const { toggleSidebar } = useSidebarStore()
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'))
  const router = useRouter()
  const { menus } = useNavigationMenu()
  return (
    <List disablePadding>
      {menus.map((item) => (
        <Tooltip title={item.resource} key={item.path} placement="right">
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
              <ListItemText primary={item.resource} />
            </ListItemButton>
          </ListItem>
        </Tooltip>
      ))}
    </List>
  )
}
