import DatatableListView from '@/components/views/datatable-list.view'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import {
  useAssociationBeneficiariesListQuery,
  useAssociationProgramsListQuery,
} from '@/modules/program/api/queries'
import { associationBeneficiariesListColumns } from '@/modules/program/constants/association-beneficiaries-list-columns'
import { unassignedAssociationListColumns } from '@/modules/program/constants/unassigned-association-list-columns'
import { ProgramBeneficiariesViewEnum } from '@/modules/program/enums'
import { useAssociationBeneficiaries } from '@/modules/program/hooks/use-association-beneficiaries'
import { ProgramBeneficiariesActions } from './program-beneficiaries-actions'
import { useAuthStore } from '@/lib/stores/auth.store'
import { associationBeneficiariesExportColumns } from '../constants/association-beneficiaries-export-columns'

export function AssociationBeneficiaries() {
  const { ability } = useAuthStore()
  const canUpdate = ability?.can(
    PermissionEnum.Update,
    ResourceEnum.AssociationBeneficiaries
  )
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
          active: {
            _eq: true,
          },
        }}
        useListQueryHook={useAssociationProgramsListQuery}
        columns={unassignedAssociationListColumns}
        name="Association Beneficiaries"
        withCreate={false}
        isSelectable={canUpdate}
        bulkActions={canUpdate ? bulkActions : []}
        customActions={ProgramBeneficiariesActions}
        additionalTypenames={['AssociationPrograms']}
        actions={canUpdate ? unassignedActions : []}
        searchFields={['name']}
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
      isSelectable={canUpdate}
      bulkActions={canUpdate ? bulkActions : []}
      customActions={ProgramBeneficiariesActions}
      additionalTypenames={['AssociationBeneficiaries']}
      actions={canUpdate ? assignedActions : []}
      exportFields={associationBeneficiariesExportColumns}
    />
  )
}
