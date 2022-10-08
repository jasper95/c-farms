import { useRouter } from 'next/router'
import { annualInfoSchema } from '@/modules/annual-info/constants'
import { useDialogStore } from '@/lib/stores/dialog'
import dynamic from 'next/dynamic'
import { useCreateAnnualInfoMutation } from '@/modules/annual-info/api/mutations'

const AddAnnualInfoDialog = dynamic(
  () => import('@/modules/annual-info/components/annual-info-dialog.component')
)
export function useAnnualInfoList() {
  const router = useRouter()
  const { showDialog } = useDialogStore()
  const [, onCreate] = useCreateAnnualInfoMutation()
  const householdId = router.query.id
  return {
    onClickCreate,
    householdId,
  }

  function onClickCreate() {
    showDialog({
      component: AddAnnualInfoDialog,
      props: {
        title: 'New Annual Info',
        defaultValues: annualInfoSchema.noUnknown().cast({}),
        onValid: (data) =>
          onCreate({
            object: {
              ...data,
              householdId,
            },
          }),
      },
    })
  }
}
