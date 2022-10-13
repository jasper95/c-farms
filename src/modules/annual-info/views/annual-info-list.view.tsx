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
import { useRouter } from 'next/router'
import {
  useCreateAnnualInfoMutation,
  useUpdateAnnualInfoMutation,
} from '@/modules/annual-info/api/mutations'
import { useEditDialogHook } from '@/lib/hooks/use-edit-dialog.hook'
import { AnnualInfoForm } from '@/modules/household/components'

const name = 'Annual Info'
export function AnnualInfoListView() {
  const router = useRouter()
  const householdId = router.query.id
  const { onClickCreate } = useNewDialogHook({
    component: AnnualInfoForm,
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
    component: AnnualInfoForm,
  })
  return (
    <DatatableListView
      name="Annual Info"
      onCreate={onClickCreate}
      onEdit={onClickEdit}
      listQueryVariables={{
        householdId: {
          _eq: householdId,
        },
      }}
      useListQueryHook={useAnnualInfoListQuery}
      columns={annualInfoListColumns}
    />
  )
}
