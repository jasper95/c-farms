import { useNotificationStore } from '@/lib/stores/notification'
import { useRouter } from 'next/router'
import {
  useCreateAssociationProgramMutation,
  useDeleteAssociationProgramMutation,
} from '../api/mutations'
import { ProgramBeneficiariesViewEnum } from '../enums'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { TableState } from '@/components/data-table/table-reducer'
import { UnassignedAssociationListRow } from '../interfaces/unassigned-association-list-row'
import { AssociationBeneficiariesListRow } from '../interfaces/associations-list-row'

export function useAssociationBeneficiaries() {
  const router = useRouter()
  const view = router.query.view || ProgramBeneficiariesViewEnum.Assigned
  const id = router.query.id
  const { notifySuccess } = useNotificationStore()

  const [, onDelete] = useDeleteAssociationProgramMutation()
  const [, onCreate] = useCreateAssociationProgramMutation()
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
      onClick: removeAssociation,
      icon: RemoveCircleIcon,
    },
  ]
  const unassignedActions = [
    {
      label: 'Add',
      onClick: addAssociation,
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

  async function addAssociation(row: UnassignedAssociationListRow) {
    await onCreate(
      {
        objects: [
          {
            associationId: row.id,
            programId: id,
          },
        ],
      },
      {
        additionalTypenames: [
          'AssociationBeneficiaries',
          'AssociationPrograms',
        ],
      }
    )
  }
  async function removeAssociation(row: AssociationBeneficiariesListRow) {
    await onDelete(
      {
        ids: [row.id],
      },
      {
        additionalTypenames: [
          'AssociationBeneficiaries',
          'AssociationPrograms',
        ],
      }
    )
    notifySuccess('Association sucessfully removed')
  }
  async function onRemove(tableState: TableState) {
    const { selected } = tableState
    await onDelete(
      {
        ids: selected,
      },
      {
        additionalTypenames: [
          'AssociationBeneficiaries',
          'AssociationPrograms',
        ],
      }
    )
    notifySuccess('Association successfully removed')
  }

  async function onAdd(tableState: TableState) {
    const { selected } = tableState
    await onCreate(
      {
        objects: selected.map((associationId) => ({
          programId: id,
          associationId,
        })),
      },
      {
        additionalTypenames: [
          'AssociationBeneficiaries',
          'AssociationPrograms',
        ],
      }
    )
    notifySuccess('Association successfully added')
  }
}
