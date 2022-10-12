import DatatableListView from '@/components/views/datatable-list.view'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import { useRouter } from 'next/router'
import { CommodityProduceForm } from '@/modules/household/components/commodity-produce-inventory-form.component'
import { useCreateCommodityProduceInventoryMutation } from '../api/mutations'
import { commodityProduceInventorySchema } from '../constants/commodity-produce-inventory-schema'
import { useCommodityProduceListQuery } from '../api/queries'
import { commodityProduceInventoryListColumns } from '../constants/commodity-produce-inventory-list-columns'

const name = 'Commodity Produce'
export function CommodityProduceInventoryListView() {
  const router = useRouter()
  const householdId = router.query.id
  const { onClickCreate } = useNewDialogHook({
    component: CommodityProduceForm,
    name,
    useMutationHook: useCreateCommodityProduceInventoryMutation,
    schema: commodityProduceInventorySchema,
    params: {
      householdId,
    },
  })
  return (
    <DatatableListView
      name="Commodity Produce"
      onCreate={onClickCreate}
      listQueryVariables={{
        where: {
          householdId: {
            _eq: householdId,
          },
        },
      }}
      useListQueryHook={useCommodityProduceListQuery}
      columns={commodityProduceInventoryListColumns}
    />
  )
}
