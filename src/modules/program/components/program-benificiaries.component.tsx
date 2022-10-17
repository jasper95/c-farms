import DatatableListView from '@/components/views/datatable-list.view'
import { useHouseholdBenificiariesListQuery } from '../api/queries'
import { beneficiariesListColumns } from '../constants/beneficiaries-list-columns'
import { useProgramBeneficiaries } from '../hooks/use-program-beneficiaries'
import { ProgramBeneficiariesActions } from './program-beneficiaries-actions'

export function ProgramBenificiaries() {
  const { bulkActions, listQueryVariables } = useProgramBeneficiaries()
  return (
    <DatatableListView
      listQueryVariables={listQueryVariables}
      useListQueryHook={useHouseholdBenificiariesListQuery}
      columns={beneficiariesListColumns}
      name="Beneficiaries"
      withCreate={false}
      isSelectable
      bulkActions={bulkActions}
      customActions={ProgramBeneficiariesActions}
      additionalTypenames={['HouseholdBeneficiaries']}
    />
  )
}
