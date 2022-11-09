import { useFarmViewListQuery } from '@/modules/farm/api/queries'
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
      useListQueryHook={useFarmViewListQuery}
      columns={farmListColumns}
      component={FarmMapTableComponent}
      customActions={FarmMapTableActions}
      name="Farm"
      searchFields={['name', 'lastName', 'firstName']}
    />
  )
}
