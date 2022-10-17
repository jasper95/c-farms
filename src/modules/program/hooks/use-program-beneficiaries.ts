import { TableState } from '@/components/data-table/table-reducer'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { useRouter } from 'next/router'
import { ProgramBeneficiariesViewEnum } from '../enums'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import {
  useCreateHouseholdProgramMutation,
  useDeleteHouseholdProgramMutation,
} from '../api/mutations'
import { useNotificationStore } from '@/lib/stores/notification'
import { UnassignedHouseholdListRow } from '../interfaces/unassigned-household-list-row'
import { BeneficiariesListRow } from '../interfaces/beneficiares-list-row'

export function useProgramBeneficiaries() {
  const router = useRouter()
  const view = router.query.view || ProgramBeneficiariesViewEnum.Assigned
  const id = router.query.id
  const { notifySuccess } = useNotificationStore()

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
  const assignedActions = [
    {
      label: 'Remove',
      onClick: removeHousehold,
      icon: RemoveCircleIcon,
    },
  ]
  const unassignedActions = [
    {
      label: 'Add',
      onClick: addHousehold,
      icon: AddCircleIcon,
    },
  ]
  return {
    bulkActions,
    view,
    id,
    assignedActions,
    unassignedActions,
  }

  async function addHousehold(row: UnassignedHouseholdListRow) {
    await onCreate(
      {
        objects: [
          {
            householdId: row.id,
            programId: id,
          },
        ],
      },
      { additionalTypenames: ['ProgramBeneficiaries', 'HouseholdPrograms'] }
    )
  }

  async function removeHousehold(row: BeneficiariesListRow) {
    await onDelete(
      {
        ids: [row.id],
      },
      { additionalTypenames: ['ProgramBeneficiaries', 'HouseholdPrograms'] }
    )
    notifySuccess('Household successfully removed')
  }

  async function onRemove(tableState: TableState) {
    const { selected } = tableState
    await onDelete(
      {
        ids: selected,
      },
      { additionalTypenames: ['ProgramBeneficiaries', 'HouseholdPrograms'] }
    )
    notifySuccess('Household successfully removed')
  }

  async function onAdd(tableState: TableState) {
    const { selected } = tableState
    await onCreate(
      {
        objects: selected.map((householdId) => ({
          programId: id,
          householdId,
        })),
      },
      { additionalTypenames: ['ProgramBeneficiaries', 'HouseholdPrograms'] }
    )
    notifySuccess('Household successfully added')
  }
}
