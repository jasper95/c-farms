import { DataTableProps, Identifiable } from '@/components/data-table/types'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ProgramBeneficiariesViewEnum } from '../enums'

export function ProgramBeneficiariesActions<T extends Identifiable>(
  props: Pick<DataTableProps<T>, 'tableDispatch' | 'tableState'>
) {
  const { tableDispatch, tableState } = props
  const router = useRouter()
  const view = router.query.view || ProgramBeneficiariesViewEnum.Assigned
  useEffect(() => {
    tableDispatch({
      type: 'SetMetadata',
      payload: {
        view,
      },
    })
  }, [tableDispatch, view])
  const buttons = [
    {
      view: ProgramBeneficiariesViewEnum.Assigned,
      label: 'Selected',
    },
    {
      view: ProgramBeneficiariesViewEnum.Unassigned,
      label: 'Not Selected',
    },
  ]
  return (
    <ButtonGroup size="medium">
      {buttons.map((button) => (
        <Button
          key={button.label}
          variant={view === button.view ? 'contained' : 'outlined'}
          color={view === button.view ? 'secondary' : 'inherit'}
          onClick={() => onChangeView(button.view)}
        >
          {button.label}
        </Button>
      ))}
    </ButtonGroup>
  )

  function onChangeView(view: ProgramBeneficiariesViewEnum) {
    if (view !== tableState.metadata.view) {
      router.replace({ ...router, query: { ...router.query, view: view } })
      tableDispatch({
        type: 'SetSelected',
        payload: [],
      })
    }
  }
}
