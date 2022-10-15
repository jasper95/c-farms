import dynamic from 'next/dynamic'
import { FarmPopup } from '@/modules/farm/components'
import { IMapProps } from '@/components/map/interfaces'
import { DataTableProps } from '@/components/data-table/types'
import DataTable from '@/components/data-table'
import IconButton from '@mui/material/IconButton'
import MapIcon from '@mui/icons-material/Map'
import ListIcon from '@mui/icons-material/List'
import { FarmListRowInterface } from '../interfaces'

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
  const { tableState } = props
  if (tableState?.metadata?.view === 'map') {
    return <Map popupData={props.rows} popupComponent={FarmPopup} layers={[]} />
  }
  return <DataTable {...props} />
}

export function FarmMapTableCustomActions(
  props: Pick<
    DataTableProps<FarmListRowInterface>,
    'tableDispatch' | 'tableState'
  >
) {
  const { tableDispatch, tableState } = props

  return (
    <>
      <IconButton onClick={onSwitchView} sx={{ mr: 2 }}>
        {tableState?.metadata?.view === 'map' ? <ListIcon /> : <MapIcon />}
      </IconButton>
    </>
  )

  function onSwitchView() {
    tableDispatch?.({
      type: 'SetMetadata',
      payload: {
        view: tableState?.metadata?.view === 'map' ? 'list' : 'map',
      },
    })
  }
}
