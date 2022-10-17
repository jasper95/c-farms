import dynamic from 'next/dynamic'
import { FarmPopup } from '@/modules/farm/components'
import { IMapProps } from '@/components/map/interfaces'
import { DataTableProps } from '@/components/data-table/types'
import DataTable from '@/components/data-table'
import { FarmListRowInterface } from '../interfaces'
import { useFarmMapTableHook } from '../hooks'

const Map = dynamic<IMapProps<FarmListRowInterface>>(
  () => import('@/components/map'),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
)

export function FarmMapTableComponent(
  props: DataTableProps<FarmListRowInterface>
) {
  const { tableState, tableDispatch } = props
  const { layers, popupData } = useFarmMapTableHook({
    tableDispatch,
    tableState,
  })
  if (tableState.metadata.view === 'map') {
    return (
      <Map
        zoom={13}
        popupData={popupData}
        popupComponent={FarmPopup}
        layers={layers}
      />
    )
  }
  return <DataTable {...props} />
}
