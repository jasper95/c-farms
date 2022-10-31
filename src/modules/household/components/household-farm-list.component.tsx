import { useFarmListQuery } from '@/modules/farm/api/queries'
import DatatableListView from '@/components/views/datatable-list.view'
import { farmListColumns } from '@/modules/farm/constants'
import {
  FarmMapTableActions,
  FarmMapTableComponent,
} from '@/modules/farm/components'
import { useRouter } from 'next/router'

export function HouseholdFarmList() {
  const router = useRouter()
  return (
    <DatatableListView
      listQueryVariables={{
        householdId: {
          _eq: router.query.id,
        },
      }}
      onCreate={() => router.push(`/farm/new?householdId=${router.query.id}`)}
      actions={[]}
      useListQueryHook={useFarmListQuery}
      columns={farmListColumns}
      component={FarmMapTableComponent}
      customActions={FarmMapTableActions}
      name="Farm"
    />
  )
}
