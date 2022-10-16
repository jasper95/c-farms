import DatatableListView from '@/components/views/datatable-list.view'
import { useRouter } from 'next/router'
import { useHouseholdBenificiariesListQuery } from '../api/queries'
import { beneficiariesListColumns } from '../constants/beneficiaries-list-columns'

export function ProgramBenificiaries() {
  const router = useRouter()
  return (
    <DatatableListView
      listQueryVariables={{
        programIds: {
          _contains: router.query.id,
        },
      }}
      useListQueryHook={useHouseholdBenificiariesListQuery}
      columns={beneficiariesListColumns}
      name="Benificiaries"
      readOnly
    />
  )
}
