import DatatableListView from '@/components/views/datatable-list.view'
import { useRouter } from 'next/router'
import {
  useCommodityProduceDetailsQuery,
  useCommodityProduceListQuery,
} from '@/modules/commodity-produce/api/queries'
import { farmProduceListColumns } from '../constants/farm-produce-list-columns'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'
import { withAuthorization } from '@/lib/hocs/with-authorization'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import { useEditDialogHook } from '@/lib/hooks/use-edit-dialog.hook'
import { commodityProduceSchema } from '@/modules/commodity-produce/constants'
import { CommodityProduceForm } from '@/modules/household/components/commodity-produce-form.component'
import { useUpdateCommodityProduceMutation } from '@/modules/commodity-produce/api/mutations'

const name = 'Commodity Produce'
function View() {
  const router = useRouter()
  const farmId = router.query.id

  return (
    <DatatableListView
      withCreate={false}
      name={ResourceEnum.FarmProduce}
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

export const FarmProduceInventoryListView: PageProps = withAuthorization({
  permission: PermissionEnum.Read,
  resource: ResourceEnum.FarmProduce,
})(View)
