import DatatableListView from '@/components/views/datatable-list.view'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import { useAnnualInfoListQuery } from '@/modules/annual-info/api/queries'
import {
  annualInfoListColumns,
  annualInfoSchema,
} from '@/modules/annual-info/constants'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useCreateAnnualInfoMutation } from '@/modules/annual-info/api/mutations'

const AddAnnualInfoDialog = dynamic(
  () => import('@/modules/annual-info/components/annual-info-dialog.component')
)

export function AnnualInfoListView() {
  const router = useRouter()
  const householdId = router.query.id
  const { onClickCreate } = useNewDialogHook({
    component: AddAnnualInfoDialog,
    name: 'Annual Info',
    useMutationHook: useCreateAnnualInfoMutation,
    schema: annualInfoSchema,
    params: {
      householdId,
    },
  })
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
