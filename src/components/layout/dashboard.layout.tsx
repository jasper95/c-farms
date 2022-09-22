import React, { ReactElement, ReactNode } from 'react'
import Header from './header.layout'
import Navigation, { DrawerHeader } from './navigation.layout'
import Box from '@mui/material/Box'

type DashboardProps = {
  children: ReactNode
}
export function Dashboard(props: DashboardProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
  )
}

export default function getDashboardLayout(page: ReactElement) {
  return <Dashboard>{page}</Dashboard>
}
