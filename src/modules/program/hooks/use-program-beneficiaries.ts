import { TableState } from '@/components/data-table/table-reducer'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { useRouter } from 'next/router'
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
    bulkActions,
    view,
    id,
  }

  function onRemove(tableState: TableState) {
    const { selected } = tableState
    onDelete(
      {
        ids: selected,
      },
      { additionalTypenames: ['ProgramBeneficiaries', 'HouseholdPrograms'] }
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
      { additionalTypenames: ['ProgramBeneficiaries', 'HouseholdPrograms'] }
    )
  }
}
