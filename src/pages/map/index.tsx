import Breadcrumbs from '@/components/breadcrumbs'
import getDashboardLayout from '@/components/layout/dashboard.layout'
import dynamic from 'next/dynamic'

const PolygonMap = dynamic(() => import('@/components/map'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

const MapPage = () => {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: 'Farm Map' }]} />
      <PolygonMap />
    </>
  )
}

MapPage.getLayout = getDashboardLayout

export default MapPage
