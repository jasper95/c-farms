import { yupResolver } from '@hookform/resolvers/yup'
import { DeepPartial, FieldValues, useForm } from 'react-hook-form'
import * as Urql from 'urql'
import ObjectSchema, { AssertsShape } from 'yup/lib/object'
import * as Types from '@/lib/generated/graphql.types'
import { useNotificationStore } from '@/lib/stores/notification'
import { useRouter } from 'next/router'

export type MutationResponseType = {
  data?: { id: any } | null | undefined
}

export type CreateMutationVariables<T> = Types.Exact<{
  object: T
}>

export interface UseNewViewProps<
  T extends FieldValues,
  MutationPayload,
  MutationResponse extends MutationResponseType
> {
  name: string
  redirectBaseUrl?: string
  useMutationHook(): Urql.UseMutationResponse<
    MutationResponse,
    CreateMutationVariables<MutationPayload>
  >
  schema: ObjectSchema<T>
  transform?: (arg: AssertsShape<T>) => MutationPayload
  params?: Partial<MutationPayload>
  initialValues?: Partial<T>
  additionalTypenames?: string[]
}

export function useNewViewHook<
  T extends FieldValues,
  MutationPayload,
  MutationResponse extends MutationResponseType
>(props: UseNewViewProps<T, MutationPayload, MutationResponse>) {
  const { notifySuccess } = useNotificationStore()
  const {
    useMutationHook,
    schema,
    transform = (a) => a,
    name,
    redirectBaseUrl,
    params,
    initialValues = {},
    additionalTypenames = [],
  } = props
  const [createMutationResponse, onCreate] = useMutationHook()
  const router = useRouter()
  const formProps = useForm({
    defaultValues: schema.cast(initialValues) as DeepPartial<AssertsShape<T>>,
    resolver: yupResolver(schema, { abortEarly: false }),
  })

  function onSave() {
    formProps.handleSubmit(onValid)()
  }

  async function onValid(data: AssertsShape<T>) {
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
    notifySuccess(`${name} successfully created`)
    if (redirectBaseUrl) {
      router.push(`${redirectBaseUrl}/${response.data?.data?.id}`)
    }
  }

  return {
    formProps,
    isMutating: createMutationResponse.fetching,
    onSave,
  }
}
