import { DeepPartial, FieldValues } from 'react-hook-form'
import { AssertsShape } from 'yup/lib/object'
import { useNotificationStore } from '@/lib/stores/notification'
import { useRouter } from 'next/router'
import { ComponentType, useCallback, useEffect, useRef, useState } from 'react'
import { DetailsQueryVariable, UseEditViewProps } from './use-edit-view.hook'
import { IWithDialogProps } from '@/lib/hocs'
import { useDialogStore } from '@/lib/stores/dialog'
import { MutationResponseType } from './use-new-view.hook'
import { Identifiable } from '@/components/data-table/types'

export interface UseEditDialogProps<
  T extends FieldValues,
  DetailsResponse extends Identifiable,
  MutationPayload,
  MutationResponse extends MutationResponseType
> extends UseEditViewProps<
    T,
    DetailsResponse,
    MutationPayload,
    MutationResponse
  > {
  component: ComponentType<IWithDialogProps<AssertsShape<T>>>
}

export function useEditDialogHook<
  T extends FieldValues,
  DetailsResponse extends Identifiable,
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
  const firstQuery = useRef(true)
  const { notifySuccess } = useNotificationStore()
  const { showDialog, dialog } = useDialogStore()
  const {
    useMutationHook,
    schema,
    transform = (a) => a,
    name,
    redirectBaseUrl,
    useDetailsQueryHook,
    component,
  } = props
  const router = useRouter()
  const [variables, setVariables] = useState<DetailsQueryVariable>()
  const [detailsQueryResponse, onQuery] = useDetailsQueryHook({
    pause: true,
    variables,
    requestPolicy: 'network-only',
  })

  useEffect(() => {
    if (firstQuery.current) {
      firstQuery.current = false
      return
    }
    onQuery()
  }, [variables, onQuery])

  const makeRequest = useCallback((reqVariables: DetailsQueryVariable) => {
    setVariables(reqVariables)
  }, [])
  const [, onUpdate] = useMutationHook()
  const [dialogActive, setDialogActive] = useState(false)
  console.log('dialogActive: ', dialogActive)

  useEffect(() => {
    if (detailsQueryResponse.data?.details && dialogActive) {
      showDialog({
        component,
        props: {
          onCancel: () => setDialogActive(false),
          title: `Edit ${name}`,
          validationSchema: schema,
          defaultValues: schema
            .noUnknown()
            .cast(detailsQueryResponse.data?.details) as DeepPartial<T>,
          onValid: async (data) => {
            const payload = transform(data) as MutationPayload
            await onUpdate({
              id: {
                id: detailsQueryResponse.data?.details?.id,
              },
              object: payload,
            })
            notifySuccess(`${name} successfully updated`)
            if (redirectBaseUrl) {
              router.push(redirectBaseUrl)
            }
            setDialogActive(false)
          },
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailsQueryResponse?.data?.details, dialogActive])

  async function onClickEdit(id: string) {
    makeRequest({
      id,
    })
    setDialogActive(true)
  }

  return {
    onClickEdit,
  }
}
