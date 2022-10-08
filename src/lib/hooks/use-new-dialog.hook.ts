import { useNotificationStore } from '@/lib/stores/notification'
import { MutationResponseType, UseNewViewProps } from './use-new-view.hook'
import { ComponentType } from 'react'
import { IWithDialogProps } from '@/lib/hocs'
import { useDialogStore } from '@/lib/stores/dialog'
import { DeepPartial, FieldValues } from 'react-hook-form'
import { useRouter } from 'next/router'
import { AssertsShape } from 'yup/lib/object'

export interface UseNewDialogProps<
  T extends FieldValues,
  MutationPayload,
  MutationResponse extends MutationResponseType
> extends UseNewViewProps<T, MutationPayload, MutationResponse> {
  component: ComponentType<IWithDialogProps<AssertsShape<T>>>
}

export function useNewDialogHook<
  T extends FieldValues,
  MutationPayload,
  MutationResponse extends MutationResponseType
>(props: UseNewDialogProps<T, MutationPayload, MutationResponse>) {
  const { notifySuccess } = useNotificationStore()
  const {
    useMutationHook,
    schema,
    transform = (a) => a,
    name,
    redirectBaseUrl,
    component,
    params,
  } = props
  const { showDialog } = useDialogStore()
  const router = useRouter()
  const [createMutationResponse, onCreate] = useMutationHook()

  return {
    onClickCreate,
    isMutating: createMutationResponse.fetching,
  }

  function onClickCreate() {
    showDialog({
      component,
      props: {
        title: `New ${name}`,
        validationSchema: schema,
        defaultValues: schema.cast({}) as DeepPartial<T>,
        onValid: async (data) => {
          const payload = transform(data) as MutationPayload
          const response = await onCreate({
            object: {
              ...payload,
              ...(params || {}),
            },
          })
          notifySuccess(`${name} successfully created`)
          if (redirectBaseUrl) {
            router.replace(`${redirectBaseUrl}/${response.data?.data?.id}`)
          }
        },
      },
    })
  }
}
