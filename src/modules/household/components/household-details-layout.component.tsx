import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Link from '@/components/link'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'
import { HouseholdDetailsRoutesEnum } from '@/modules/household/enums'
import { householdDetailsTab } from '@/modules/household/constants'
import Box from '@mui/material/Box'

export function HouseholdDetailsLayout(props: PropsWithChildren<{}>) {
  const { children } = props
  const router = useRouter()
  const { id, tab = HouseholdDetailsRoutesEnum.Primary } = router.query
  return (
    <>
      <Tabs sx={{ mb: 3 }} value={tab}>
        {householdDetailsTab.map((tab) => (
          <Tab
            key={tab.label}
            LinkComponent={Link}
            href={`/household/${id}/${tab.value}`}
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
