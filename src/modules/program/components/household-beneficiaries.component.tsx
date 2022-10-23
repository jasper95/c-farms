import DatatableListView from '@/components/views/datatable-list.view'
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

export function HouseholdBeneficiaries() {
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
        name="Beneficiaries"
        withCreate={false}
        isSelectable
        bulkActions={bulkActions}
        customActions={ProgramBeneficiariesActions}
        additionalTypenames={['HouseholdPrograms']}
        actions={unassignedActions}
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
      name="Beneficiaries"
      withCreate={false}
      isSelectable
      bulkActions={bulkActions}
      customActions={ProgramBeneficiariesActions}
      additionalTypenames={['ProgramBeneficiaries']}
      actions={assignedActions}
    />
  )
}
