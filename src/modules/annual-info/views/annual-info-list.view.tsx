import DatatableListView from '@/components/views/datatable-list.view'
import { useNewDialogHook } from '@/lib/hooks/use-new-dialog.hook'
import {
  useAnnualInfoDetailsQuery,
  useAnnualInfoListQuery,
} from '@/modules/annual-info/api/queries'
import {
  annualInfoListColumns,
  annualInfoSchema,
} from '@/modules/annual-info/constants'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import {
  useCreateAnnualInfoMutation,
  useUpdateAnnualInfoMutation,
} from '@/modules/annual-info/api/mutations'
import { useEditDialogHook } from '@/lib/hooks/use-edit-dialog.hook'

const AddAnnualInfoDialog = dynamic(
  () => import('@/modules/annual-info/components/annual-info-dialog.component')
)
const name = 'Annual Info'
export function AnnualInfoListView() {
  const router = useRouter()
  const householdId = router.query.id
  const { onClickCreate } = useNewDialogHook({
    component: AddAnnualInfoDialog,
    name,
    useMutationHook: useCreateAnnualInfoMutation,
    schema: annualInfoSchema,
    params: {
      householdId,
    },
  })
  const { onClickEdit } = useEditDialogHook({
    schema: annualInfoSchema,
    useDetailsQueryHook: useAnnualInfoDetailsQuery,
    useMutationHook: useUpdateAnnualInfoMutation,
    name,
    component: AddAnnualInfoDialog,
  })
  return (
    <DatatableListView
      name="Annual Info"
      onCreate={onClickCreate}
      onEdit={onClickEdit}
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
