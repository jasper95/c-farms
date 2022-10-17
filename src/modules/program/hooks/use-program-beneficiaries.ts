import { TableState } from '@/components/data-table/table-reducer'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { ProgramBeneficiariesViewEnum } from '../enums'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import {
  useCreateHouseholdProgramMutation,
  useDeleteHouseholdProgramMutation,
} from '../api/mutations'

export function useProgramBeneficiaries() {
  const router = useRouter()
  const view = router.query.view || ProgramBeneficiariesViewEnum.Assigned
  const id = router.query.id

  const [, onDelete] = useDeleteHouseholdProgramMutation()
  const [, onCreate] = useCreateHouseholdProgramMutation()
  const listQueryVariables = useMemo(() => {
    const variables = {
      programIds: {
        _contains: id,
      },
    }
    return view === ProgramBeneficiariesViewEnum.Assigned
      ? variables
      : { _not: variables }
  }, [id, view])
  const bulkActions =
    view === ProgramBeneficiariesViewEnum.Assigned
      ? [
          {
            label: 'Remove',
            onClick: onRemove,
            icon: RemoveCircleIcon,
          },
        ]
      : [
          {
            label: 'Add',
            onClick: onAdd,
            icon: AddCircleIcon,
          },
        ]
  return {
    listQueryVariables,
    bulkActions,
  }

  function onRemove(tableState: TableState) {
    const { selected } = tableState
    onDelete(
      {
        programId: id,
        householdIds: selected,
      },
      { additionalTypenames: ['HouseholdBeneficiaries'] }
    )
  }

  function onAdd(tableState: TableState) {
    const { selected } = tableState
    onCreate(
      {
        objects: selected.map((householdId) => ({
          programId: id,
          householdId,
        })),
      },
      { additionalTypenames: ['HouseholdBeneficiaries'] }
    )
  }
}
