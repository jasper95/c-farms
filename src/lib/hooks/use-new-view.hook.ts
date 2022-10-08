import { yupResolver } from '@hookform/resolvers/yup'
import { DeepPartial, useForm } from 'react-hook-form'
import * as Urql from 'urql'
import ObjectSchema, { AssertsShape, ObjectShape } from 'yup/lib/object'
import * as Types from '@/lib/generated/graphql.types'
import { useNotificationStore } from '@/lib/stores/notification'
import { useRouter } from 'next/router'

export type MutationResponseType = {
  data?: { id: any } | null | undefined
}

export type CreateMutationVariables<T> = Types.Exact<{
  object: T
}>

export interface ListPagination {
  limit: number
  offset: number
}
export interface UseNewViewProps<
  T extends ObjectShape,
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
}

export function useNewViewHook<
  T extends ObjectShape,
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
  } = props
  const [createMutationResponse, onCreate] = useMutationHook()
  const router = useRouter()
  const formProps = useForm({
    defaultValues: schema.cast({}) as DeepPartial<AssertsShape<T>>,
    resolver: yupResolver(schema, { abortEarly: false }),
  })

  function onSave() {
    formProps.handleSubmit(onValid)()
  }

  async function onValid(data: AssertsShape<T>) {
    const payload = transform(data) as MutationPayload
    const response = await onCreate({
      object: payload,
    })
    notifySuccess(`${name} successfully created`)
    if (redirectBaseUrl) {
      router.replace(`${redirectBaseUrl}/${response.data?.data?.id}`)
    }
  }

  return {
    formProps,
    createMutationResponse,
    onSave,
  }
}
