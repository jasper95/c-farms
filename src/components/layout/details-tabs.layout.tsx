import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Link from '@/components/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Box from '@mui/material/Box'

interface DetailsTabsLayoutProps {
  children: ReactNode
  tabs: {
    label: string
    value: string
  }[]
}

export function DetailsTabsLayout(props: DetailsTabsLayoutProps) {
  const { children, tabs } = props
  const router = useRouter()
  const links = router.asPath.split('/').filter(Boolean)
  const { id, tab: currentTab = '' } = router.query
  return (
    <>
      <Tabs sx={{ mb: 3 }} value={currentTab}>
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            LinkComponent={Link}
            href={`/${links[0]}/${id}/${tab.value}`}
            value={tab.value}
            label={tab.label}
          />
        ))}
      </Tabs>
      <Box sx={{ mb: 2 }} />
      {children}
    </>
  )
}
