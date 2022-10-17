import DatatableListView from '@/components/views/datatable-list.view'
import {
  useAssociationBeneficiariesListQuery,
  useAssociationProgramsListQuery,
} from '../api/queries'
import { associationBeneficiariesListColumns } from '../constants/association-beneficiaries-list-columns'
import { unassignedAssociationListColumns } from '../constants/unassigned-association-list-columns'
import { ProgramBeneficiariesViewEnum } from '../enums'
import { useAssociationBeneficiaries } from '../hooks/use-association-beneficiaries'
import { ProgramBeneficiariesActions } from './program-beneficiaries-actions'

export function AssociationBeneficiaries() {
  const { bulkActions, view, id, assignedActions, unassignedActions } =
    useAssociationBeneficiaries()
  if (view === ProgramBeneficiariesViewEnum.Unassigned) {
    return (
      <DatatableListView
        listQueryVariables={{
          _not: {
            programIds: {
              _contains: id,
            },
          },
        }}
        useListQueryHook={useAssociationProgramsListQuery}
        columns={unassignedAssociationListColumns}
        name="Association Beneficiaries"
        withCreate={false}
        isSelectable
        bulkActions={bulkActions}
        customActions={ProgramBeneficiariesActions}
        additionalTypenames={['AssociationPrograms']}
        actions={unassignedActions}
      />
    )
  }
  return (
    <DatatableListView
      listQueryVariables={{
        programId: {
          _eq: id,
        },
      }}
      useListQueryHook={useAssociationBeneficiariesListQuery}
      columns={associationBeneficiariesListColumns}
      name="Association Beneficiaries"
      withCreate={false}
      isSelectable
      bulkActions={bulkActions}
      customActions={ProgramBeneficiariesActions}
      additionalTypenames={['AssociationBeneficiaries']}
      actions={assignedActions}
    />
  )
}
