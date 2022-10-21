import DatatableListView from '@/components/views/datatable-list.view'
import { useRouter } from 'next/router'
import { useCommodityProduceListQuery } from '@/modules/commodity-produce/api/queries'
import { farmProduceListColumns } from '../constants/farm-produce-list-columns'

const name = 'Commodity Produce'
export function FarmProduceInventoryListView() {
  const router = useRouter()
  const farmId = router.query.id
  return (
    <DatatableListView
      withCreate={false}
      name="Commodity Produce"
      listQueryVariables={{
        farmId: {
          _eq: farmId,
        },
      }}
      actions={[]}
      useListQueryHook={useCommodityProduceListQuery}
      columns={farmProduceListColumns}
      additionalTypenames={['Produce']}
    />
  )
}
