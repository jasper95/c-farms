import { DataTableProps } from '@/components/data-table/types'
import IconButton from '@mui/material/IconButton'
import MapIcon from '@mui/icons-material/Map'
import ListIcon from '@mui/icons-material/List'
import { FarmListRowInterface } from '../interfaces'

export function FarmMapTableActions(
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
