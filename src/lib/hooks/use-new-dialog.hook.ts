import { useNotificationStore } from '@/lib/stores/notification'
import { MutationResponseType, UseNewViewProps } from './use-new-view.hook'
import { FC } from 'react'
import { IFormContentProps, withDialog } from '@/lib/hocs'
import { useDialogStore } from '@/lib/stores/dialog'
import { DeepPartial, FieldValues } from 'react-hook-form'
import { useRouter } from 'next/router'
import { AssertsShape } from 'yup/lib/object'
import { CombinedError } from 'urql'

export interface UseNewDialogProps<
  T extends FieldValues,
  MutationPayload,
  MutationResponse extends MutationResponseType
> extends UseNewViewProps<T, MutationPayload, MutationResponse> {
  component: FC<IFormContentProps<AssertsShape<T>>>
}

export function useNewDialogHook<
  T extends FieldValues,
  MutationPayload,
  MutationResponse extends MutationResponseType
>(props: UseNewDialogProps<T, MutationPayload, MutationResponse>) {
  const { notifySuccess, notifyError } = useNotificationStore()
  const {
    useMutationHook,
    schema,
    transform = (a) => a,
    name,
    redirectBaseUrl,
    component,
    params,
    additionalTypenames = [],
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
      component: withDialog(component),
      props: {
        title: `New ${name}`,
        validationSchema: schema,
        defaultValues: schema.cast({}) as DeepPartial<T>,
        onValid: async (data: AssertsShape<T>) => {
          const payload = transform(data) as MutationPayload
          const response = await onCreate(
            {
              object: {
                ...payload,
                ...(params || {}),
              },
            },
            { additionalTypenames }
          )
          if (response.error) {
            notifyError(`Error on saving ${name}: duplicate value constraint.`)
          } else {
            notifySuccess(`${name} successfully created`)
            if (redirectBaseUrl) {
              router.replace(`${redirectBaseUrl}/${response.data?.data?.id}`)
            }
          }
        },
      },
    })
  }
}
