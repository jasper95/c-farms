import DatatableListView from '@/components/views/datatable-list.view'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import { useRouter } from 'next/router'
import { CommodityProduceForm } from '@/modules/household/components/commodity-produce-form.component'
import {
  useCreateCommodityProduceMutation,
  useDeleteCommodityProduceMutation,
  useUpdateCommodityProduceMutation,
} from '@/modules/commodity-produce/api/mutations'
import { commodityProduceSchema } from '@/modules/commodity-produce/constants/commodity-produce-schema'
import {
  useCommodityProduceDetailsQuery,
  useCommodityProduceListQuery,
} from '@/modules/commodity-produce/api/queries'
import { commodityProduceListColumns } from '@/modules/commodity-produce/constants/commodity-produce-list-columns'
import { useEditDialogHook } from '@/lib/hooks/use-edit-dialog.hook'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import { withAuthorization } from '@/lib/hocs/with-authorization'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'
import { useDeleteDialogHook } from '@/lib/hooks/use-delete-dialog.hook'

const name = 'Commodity Produce'
function View() {
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
    additionalTypenames: ['Produce'],
  })
  const { onClickDelete } = useDeleteDialogHook({
    name,
    useMutationHook: useDeleteCommodityProduceMutation,
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
      name={ResourceEnum.CommodityProduce}
      onCreate={onClickCreate}
      onEdit={onClickEdit}
      onDelete={onClickDelete}
      listQueryVariables={{
        householdId: {
          _eq: householdId,
        },
      }}
      useListQueryHook={useCommodityProduceListQuery}
      columns={commodityProduceListColumns}
      additionalTypenames={['Produce']}
    />
  )
}

export const CommodityProduceInventoryListView: PageProps = withAuthorization({
  resource: ResourceEnum.CommodityProduce,
  permission: PermissionEnum.Read,
})(View)
