import { useRouter } from 'next/router'
import { commoditySchema } from '@/modules/commodity/constants'
import { useDialogStore } from '@/lib/stores/dialog'
import dynamic from 'next/dynamic'
import { useCreateCommodityMutation } from '@/modules/commodity/api/mutations'

const AddCommodityDialog = dynamic(
  () => import('@/modules/commodity/components/commodity-dialog.component')
)
export function useCommodityList() {
  const router = useRouter()
  const { showDialog } = useDialogStore()
  const [, onCreate] = useCreateCommodityMutation()

  return {
    onClickCreate,
  }

  function onClickCreate() {
    showDialog({
      component: AddCommodityDialog,
      props: {
        title: 'New Commodity',
        defaultValues: commoditySchema.noUnknown().cast({}),
        onValid: (data) =>
          onCreate({
            object: data,
          }),
      },
    })
  }
}
