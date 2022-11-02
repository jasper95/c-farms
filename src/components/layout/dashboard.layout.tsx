import React, { ReactElement, ReactNode } from 'react'
import Header from './header.layout'
import Navigation from './navigation.layout'
import Box from '@mui/material/Box'
import Container, { ContainerProps } from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import { withAuthentication } from '@/lib/authentication/hocs/with-authentication.hoc'

type DashboardProps = {
  children: ReactNode
  maxWidth?: ContainerProps['maxWidth']
}
export const AppbarSpace = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))
function DashboardLayout(props: DashboardProps) {
  const { maxWidth = 'xl' } = props
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AppbarSpace />
        <Container maxWidth={maxWidth}>{props.children}</Container>
      </Box>
    </Box>
  )
}
export const Dashboard = withAuthentication(DashboardLayout)

export default function getDashboardLayout(page: ReactElement) {
  return <Dashboard>{page}</Dashboard>
}
