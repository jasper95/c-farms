import DatatableListView from '@/components/views/datatable-list.view'
import { useAnnualInfoListQuery } from '@/modules/annual-info/api/queries'
import { annualInfoListColumns } from '@/modules/annual-info/constants'
import { useAnnualInfoList } from '@/modules/annual-info/hooks'

export function AnnualInfoListView() {
  const { householdId, onClickCreate } = useAnnualInfoList()
  return (
    <DatatableListView
      name="Annual Info"
      onCreate={onClickCreate}
      listQueryVariables={{
        where: {
          householdId: {
            _eq: householdId,
          },
        },
      }}
      useListQueryHook={useAnnualInfoListQuery}
      columns={annualInfoListColumns}
    />
  )
}
