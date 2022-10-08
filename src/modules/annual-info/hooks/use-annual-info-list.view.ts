import { useTableState } from '@/components/data-table/use-table-state'
import { useAnnualInfoListQuery } from '@/modules/annual-info/api/queries'
import { useRouter } from 'next/router'
import {
  annualInfoListColumns,
  annualInfoSchema,
} from '@/modules/annual-info/constants'
import { useDialogStore } from '@/shared/stores/dialog'
import dynamic from 'next/dynamic'
import { useCreateAnnualInfoMutation } from '@/modules/annual-info/api/mutations'

const AddAnnualInfoDialog = dynamic(
  () => import('@/modules/annual-info/components/annual-info-dialog.component')
)
export function useAnnualInfoList() {
  const router = useRouter()
  const { showDialog } = useDialogStore()
  const [tableState, tableDispatch] = useTableState()
  const [, onCreate] = useCreateAnnualInfoMutation()
  const householdId = router.query.id
  const [listResponse] = useAnnualInfoListQuery({
    variables: {
      where: {
        householdId: {
          _eq: householdId,
        },
      },
    },
  })
  return {
    tableState,
    tableDispatch,
    rows: listResponse?.data?.list || [],
    totalRows: listResponse?.data?.meta?.aggregate?.count || 0,
    columns: annualInfoListColumns,
    listResponse,
    onClickCreate,
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
