import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import dynamic from 'next/dynamic'
import { FarmPopup } from '@/modules/farm/components'
import { useFarmListHook } from '../hooks'

const Map = dynamic(() => import('@/components/map'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})
export function FarmListView() {
  const { layers, tableProps } = useFarmListHook()
  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Farm' }]} />
      <Map
        popupData={tableProps.rows}
        popupComponent={FarmPopup}
        layers={layers}
      />
    </Dashboard>
  )
}
