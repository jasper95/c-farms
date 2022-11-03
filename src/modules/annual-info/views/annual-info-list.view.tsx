import DatatableListView from '@/components/views/datatable-list.view'
import { Option } from '@/components/creatable-select-field/interface'
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
import { AnnualInfoForm } from '@/modules/household/components/annual-info-form.component'
import { annualInfoListFilters } from '../constants/annual-info-list-filters'
import { useDeleteDialogHook } from '@/lib/hooks/use-delete-dialog.hook'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import { withAuthorization } from '@/lib/hocs/with-authorization'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'
import { useState } from 'react'

const name = 'Annual Info'
function View() {
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
    additionalTypenames: ['Annual-Info'],
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
      additionalTypenames={['AnnualInfo']}
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
      name={ResourceEnum.AnnualInfo}
      additionalTypenames={['Annual-Info']}
    />
  )
}
export const AnnualInfoListView: PageProps = withAuthorization({
  permission: PermissionEnum.Read,
  resource: ResourceEnum.AnnualInfo,
})(View)
