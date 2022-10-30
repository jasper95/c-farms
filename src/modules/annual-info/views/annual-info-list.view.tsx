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
  useDeleteAnnualInfoMutation,
  useUpdateAnnualInfoMutation,
} from '@/modules/annual-info/api/mutations'
import { useEditDialogHook } from '@/lib/hooks/use-edit-dialog.hook'
import { AnnualInfoForm } from '@/modules/household/components'
import { annualInfoListFilters } from '../constants/annual-info-list-filters'
import { useDeleteDialogHook } from '@/lib/hooks/use-delete-dialog.hook'

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
  const { onClickDelete } = useDeleteDialogHook({
    name,
    useMutationHook: useDeleteAnnualInfoMutation,
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
      // additionalTypenames={['AnnualInfo']}
      onCreate={onClickCreate}
      onEdit={onClickEdit}
      onDelete={onClickDelete}
      listQueryVariables={{
        householdId: {
          _eq: householdId,
        },
      }}
      useListQueryHook={useAnnualInfoListQuery}
      columns={annualInfoListColumns}
      filters={annualInfoListFilters}
    />
  )
}
