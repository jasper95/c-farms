import { useNotificationStore } from '@/lib/stores/notification'
import * as Urql from 'urql'
import { withDialog } from '@/lib/hocs'
import { useDialogStore } from '@/lib/stores/dialog'
import { useRouter } from 'next/router'
import * as Types from '@/lib/generated/graphql.types'
import { ConfirmDialog } from '@/components/confirm-dialog'

export type MutationResponseType = {
  data?: { id: any } | null | undefined
}

export type DeleteMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export interface UseDeleteDialogProps<
  MutationResponse extends MutationResponseType
> {
  name: string
  redirectBaseUrl?: string
  useMutationHook(): Urql.UseMutationResponse<
    MutationResponse,
    DeleteMutationVariables
  >
  additionalTypenames?: string[]
}

export function useDeleteDialogHook<
  MutationResponse extends MutationResponseType
>(props: UseDeleteDialogProps<MutationResponse>) {
  const { notifySuccess, notifyError } = useNotificationStore()
  const {
    useMutationHook,
    name,
    redirectBaseUrl,
    additionalTypenames = [],
  } = props
  const router = useRouter()
  const { showDialog } = useDialogStore()
  const [deleteMutationResponse, onDelete] = useMutationHook()

  return {
    onClickDelete,
    isMutating: deleteMutationResponse.fetching,
  }

  function onClickDelete(id: string) {
    showDialog({
      component: withDialog(ConfirmDialog),
      props: {
        title: `Delete ${name}`,
        defaultValues: {
          message: 'Are you sure you want to delete?',
        },
        continueLabel: 'Continue',
        onValid: async () => {
          const response = await onDelete(
            {
              id,
            },
            { additionalTypenames }
          )
          if (response.error) {
            notifyError(`Cannot delete ${name}`)
          } else {
            notifySuccess(`${name} successfully deleted`)
            if (redirectBaseUrl) {
              router.push(`${redirectBaseUrl}/${response.data?.data?.id}`)
            }
          }
        },
      },
    })
  }
}
