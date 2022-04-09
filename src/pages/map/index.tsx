import dynamic from 'next/dynamic'

const PolygonMap = dynamic(() => import('@/components/map'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

const MapPage = () => {
  return <PolygonMap />
}

export default MapPage
