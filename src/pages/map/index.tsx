import Breadcrumbs from '@/components/breadcrumbs'
import Dashboard from '@/components/layout/dashboard.layout'
import dynamic from 'next/dynamic'

const PolygonMap = dynamic(() => import('@/components/map'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

const MapPage = () => {
  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Farm Map' }]} />
      <PolygonMap />
    </Dashboard>
  )
}

export default MapPage
