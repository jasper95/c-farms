import DatatableListView from '@/components/views/datatable-list.view'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import { useRouter } from 'next/router'
import { CommodityProduceForm } from '@/modules/household/components/commodity-produce-form.component'
import {
  useCreateCommodityProduceMutation,
  useUpdateCommodityProduceMutation,
} from '../api/mutations'
import { commodityProduceSchema } from '../constants/commodity-produce-schema'
import {
  useCommodityProduceDetailsQuery,
  useCommodityProduceListQuery,
} from '../api/queries'
import { commodityProduceListColumns } from '../constants/commodity-produce-list-columns'
import { useEditDialogHook } from '@/lib/hooks/use-edit-dialog.hook'
import { useCommodityDetailsQuery } from '@/modules/commodity/api/queries'
import { useUpdateAnnualInfoMutation } from '@/modules/annual-info/api/mutations'

const name = 'Commodity Produce'
export function CommodityProduceInventoryListView() {
  const router = useRouter()
  const householdId = router.query.id
  const { onClickCreate } = useNewDialogHook({
    component: CommodityProduceForm,
    name,
    useMutationHook: useCreateCommodityProduceMutation,
    schema: commodityProduceSchema,
    params: {
      householdId,
    },
  })
  const { onClickEdit } = useEditDialogHook({
    schema: commodityProduceSchema,
    useDetailsQueryHook: useCommodityProduceDetailsQuery,
    useMutationHook: useUpdateCommodityProduceMutation,
    name,
    component: CommodityProduceForm,
  })
  return (
    <DatatableListView
      name="Commodity Produce"
      onCreate={onClickCreate}
      onEdit={onClickEdit}
      listQueryVariables={{
        where: {
          householdId: {
            _eq: householdId,
          },
        },
      }}
      useListQueryHook={useCommodityProduceListQuery}
      columns={commodityProduceListColumns}
    />
  )
}
