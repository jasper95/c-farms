import { FieldValues } from 'react-hook-form'
import { AssertsShape } from 'yup/lib/object'
import { useNotificationStore } from '@/lib/stores/notification'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { UseEditViewProps } from './use-edit-view.hook'
import { useDialogStore } from '@/lib/stores/dialog'
import { MutationResponseType } from './use-new-view.hook'
import { IFormContentProps, withEditDialog } from '../hocs'

export interface UseEditDialogProps<
  T extends FieldValues,
  DetailsResponse,
  MutationPayload,
  MutationResponse extends MutationResponseType
> extends UseEditViewProps<
    T,
    DetailsResponse,
    MutationPayload,
    MutationResponse
  > {
  component: FC<IFormContentProps<AssertsShape<T>>>
}

export function useEditDialogHook<
  T extends FieldValues,
  DetailsResponse,
  MutationPayload,
  MutationResponse extends MutationResponseType
>(
  props: UseEditDialogProps<
    T,
    DetailsResponse,
    MutationPayload,
    MutationResponse
  >
) {
  const { notifySuccess, notifyError } = useNotificationStore()
  const { showDialog } = useDialogStore()
  const {
    useMutationHook,
    schema,
    transform = (a) => a,
    name,
    redirectBaseUrl,
    useDetailsQueryHook,
    component,
    transformResponse,
    additionalTypenames = [],
  } = props
  const router = useRouter()
  const [, onUpdate] = useMutationHook()

  async function onClickEdit(id: string) {
    showDialog({
      component: withEditDialog(component),
      props: {
        id,
        useDetailsQueryHook,
        validationSchema: schema,
        title: `Edit ${name}`,
        continueLabel: 'Save',
        onValid: async (data: AssertsShape<T>) => {
          const payload = transform(data) as MutationPayload
          const response = await onUpdate(
            {
              id: {
                id,
              },
              object: payload,
            },
            { additionalTypenames }
          )
          if (response.error) {
            notifyError(`${name} did not update.`)
          } else {
            notifySuccess(`${name} successfully updated`)
            if (redirectBaseUrl) {
              router.push(redirectBaseUrl)
            }
          }
        },
        transform: transformResponse,
      },
    })
  }

  return {
    onClickEdit,
  }
}
