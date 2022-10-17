import DatatableListView from '@/components/views/datatable-list.view'
import {
  useHouseholdProgramsListQuery,
  useProgramBeneficiariesListQuery,
} from '../api/queries'
import { beneficiariesListColumns } from '../constants/beneficiaries-list-columns'
import { unassignedHouseholdListColumns } from '../constants/unassigned-household-list-columns'
import { ProgramBeneficiariesViewEnum } from '../enums'
import { useProgramBeneficiaries } from '../hooks/use-program-beneficiaries'
import { ProgramBeneficiariesActions } from './program-beneficiaries-actions'

export function ProgramBeneficiaries() {
  const { bulkActions, view, id, assignedActions, unassignedActions } =
    useProgramBeneficiaries()
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
