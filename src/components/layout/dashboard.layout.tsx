import React, { ReactElement, ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import Header from './header.layout'
import Navigation from './navigation.layout'

const PREFIX = 'dashboard'

const classes = {
  root: `${PREFIX}-root`,
  toolbar: `${PREFIX}-toolbar`,
  content: `${PREFIX}-content`,
}

const StyledDashboard = styled(Dashboard)(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: 'flex',
  },

  [`& .${classes.toolbar}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },

  [`& .${classes.content}`]: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

type DashboardProps = {
  children: ReactNode
}
export function Dashboard(props: DashboardProps) {
  return (
    <div className={classes.root}>
      <Header />
      <Navigation />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  )
}

export default function getDashboardLayout(page: ReactElement) {
  return <StyledDashboard>{page}</StyledDashboard>
}
