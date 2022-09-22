import React, { ReactElement, ReactNode } from 'react'
import Header from './header.layout'
import Navigation from './navigation.layout'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

type DashboardProps = {
  children: ReactNode
}
export const AppbarSpace = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))
export function Dashboard(props: DashboardProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AppbarSpace />
        {props.children}
      </Box>
    </Box>
  )
}

export default function getDashboardLayout(page: ReactElement) {
  return <Dashboard>{page}</Dashboard>
}
