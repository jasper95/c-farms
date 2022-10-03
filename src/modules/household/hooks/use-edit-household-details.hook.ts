import { DeepPartial, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useNotificationStore } from '@/shared/stores/notification'
import { useRouter } from 'next/router'
import { useEditHousehold } from './use-edit-household.hook'
import ObjectSchema, { AssertsShape, ObjectShape } from 'yup/lib/object'

export type UseEditHouseholdDetailsProps<T extends ObjectShape = any> = Pick<
  ReturnType<typeof useEditHousehold>,
  'detailsQueryResponse' | 'updateMutationResponse'
> & {
  schema: ObjectSchema<T>
}
export function useEditHouseholdDetails<T extends ObjectShape>(
  props: UseEditHouseholdDetailsProps<T>
) {
  const { detailsQueryResponse, updateMutationResponse, schema } = props
  const [detailsQueryState] = detailsQueryResponse
  const [updateMutationState, onUpdate] = updateMutationResponse
  const { notifySuccess } = useNotificationStore()
  const router = useRouter()
  const formProps = useForm<AssertsShape<T>>({
    defaultValues: schema.cast({}) as DeepPartial<AssertsShape<T>>,
    resolver: yupResolver(schema, { abortEarly: false }),
  })
  const { reset } = formProps
  useEffect(() => {
    if (detailsQueryState.data?.details) {
      reset(schema.noUnknown().cast(detailsQueryState.data?.details))
    }
  }, [detailsQueryState.data, reset, schema])

  async function onSave() {
    await onUpdate({
      object: formProps.getValues(),
      id: {
        id: router.query.id,
      },
    })
    notifySuccess('Household successfully updated')
  }

  function onSubmit() {
    formProps.handleSubmit(onSave)()
  }

  return {
    formProps,
    isUpdating: updateMutationState.fetching,
    onSubmit,
  }
}
