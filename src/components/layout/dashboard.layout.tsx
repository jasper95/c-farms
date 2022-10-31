import React, { ReactElement, ReactNode } from 'react'
import Header from './header.layout'
import Navigation from './navigation.layout'
import Box from '@mui/material/Box'
import Container, { ContainerProps } from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import { useSession } from 'next-auth/react'

type DashboardProps = {
  children: ReactNode
  maxWidth?: ContainerProps['maxWidth']
}
export const AppbarSpace = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))
export function Dashboard(props: DashboardProps) {
  const { maxWidth = 'xl' } = props
  const response = useSession({ required: true })

  if (response.status === 'loading') {
    return <div>Loading...</div>
  }
  if (response.status !== 'authenticated') {
    return null
  }
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

export default function getDashboardLayout(page: ReactElement) {
  return <Dashboard>{page}</Dashboard>
}
