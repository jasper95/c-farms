import React, { ReactNode } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Header from './header.layout'
import Navigation from './navigation.layout'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
)

type DashboardProps = {
  children: ReactNode
}
export default function Dashboard(props: DashboardProps) {
  const classes = useStyles()
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
