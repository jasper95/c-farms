import Breadcrumbs from '@/components/breadcrumbs'
import DashboardLayout from '@/components/layout/dashboard-layout'
import dynamic from 'next/dynamic'

const PolygonMap = dynamic(() => import('@/components/map'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

const MapPage = () => {
  return (
    <DashboardLayout>
      <Breadcrumbs crumbs={[{ name: 'Farm Map' }]} />
      <PolygonMap />
    </DashboardLayout>
  )
}

export default MapPage
