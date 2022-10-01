import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Link from '@/components/link'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

export function HouseholdDetailsLayout(props: PropsWithChildren<{}>) {
  const { children } = props
  const router = useRouter()
  const { id, tab = 'one' } = router.query
  return (
    <Card>
      <CardContent>
        <Tabs sx={{ mb: 3 }} value={tab}>
          <Tab
            LinkComponent={Link}
            href={`/household/${id}`}
            value="one"
            label="Details"
          />
          <Tab
            LinkComponent={Link}
            href={`/household/${id}/two`}
            value="two"
            label="Two"
          />
          <Tab
            LinkComponent={Link}
            href={`/household/${id}/three`}
            value="three"
            label="Three"
          />
        </Tabs>
        {children}
      </CardContent>
    </Card>
  )
}
