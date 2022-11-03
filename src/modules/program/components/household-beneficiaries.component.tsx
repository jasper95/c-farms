import DatatableListView from '@/components/views/datatable-list.view'
import { withAuthorization } from '@/lib/hocs/with-authorization'
import { useAuthStore } from '@/lib/stores/auth.store'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'
import {
  useHouseholdProgramsListQuery,
  useProgramBeneficiariesListQuery,
} from '@/modules/program/api/queries'
import { beneficiariesListColumns } from '@/modules/program/constants/beneficiaries-list-columns'
import { unassignedHouseholdListColumns } from '@/modules/program/constants/unassigned-household-list-columns'
import { ProgramBeneficiariesViewEnum } from '@/modules/program/enums'
import { useHouseholdBeneficiaries } from '@/modules/program/hooks/use-household-beneficiaries'
import { programBeneficiariesListFilters } from '../constants/household-beneficiaries-filters'
import { ProgramBeneficiariesActions } from './program-beneficiaries-actions'

function View() {
  const { ability } = useAuthStore()
  const canUpdate = ability?.can(
    PermissionEnum.Update,
    ResourceEnum.HouseholdBeneficiaries
  )
  const { bulkActions, view, id, assignedActions, unassignedActions } =
    useHouseholdBeneficiaries()
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
        useListQueryHook={useHouseholdProgramsListQuery}
        columns={unassignedHouseholdListColumns}
        name={ResourceEnum.HouseholdBeneficiaries}
        withCreate={false}
        isSelectable={canUpdate}
        bulkActions={canUpdate ? bulkActions : []}
        customActions={ProgramBeneficiariesActions}
        additionalTypenames={['HouseholdPrograms']}
        actions={canUpdate ? unassignedActions : []}
        filters={programBeneficiariesListFilters}
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
      useListQueryHook={useProgramBeneficiariesListQuery}
      columns={beneficiariesListColumns}
      name={ResourceEnum.ProgramBeneficiaries}
      withCreate={false}
      isSelectable={canUpdate}
      bulkActions={canUpdate ? bulkActions : []}
      customActions={ProgramBeneficiariesActions}
      additionalTypenames={['ProgramBeneficiaries']}
      actions={canUpdate ? assignedActions : []}
    />
  )
}
export const HouseholdBeneficiaries: PageProps = withAuthorization({
  permission: PermissionEnum.Read,
  resource: ResourceEnum.ProgramBeneficiaries,
})(View)
