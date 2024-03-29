import { yupResolver } from '@hookform/resolvers/yup'
import { DeepPartial, FieldValues, useForm } from 'react-hook-form'
import * as Urql from 'urql'
import ObjectSchema, { AssertsShape } from 'yup/lib/object'
import * as Types from '@/lib/generated/graphql.types'
import { useNotificationStore } from '@/lib/stores/notification'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { MutationResponseType } from './use-new-view.hook'
import { useAuthStore } from '../stores/auth.store'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'

export type BaseDetailsQuery<Details> = {
  details?: Details | null | undefined
}
export type DetailsQueryVariable = Types.Exact<{
  id: Types.Scalars['uuid']
}>
export type EditMutationVariables<T> = Types.Exact<{
  object?: Types.InputMaybe<T>
  id: Types.Exact<{
    id: Types.Scalars['uuid']
  }>
}>

export interface UseEditViewProps<
  T extends FieldValues,
  DetailsResponse,
  MutationPayload,
  MutationResponse extends MutationResponseType
> {
  name: string
  redirectBaseUrl?: string
  useMutationHook(): Urql.UseMutationResponse<
    MutationResponse,
    EditMutationVariables<MutationPayload>
  >
  schema: ObjectSchema<T>
  useDetailsQueryHook(
    options?: Omit<Urql.UseQueryArgs<DetailsQueryVariable>, 'query'>
  ): Urql.UseQueryResponse<BaseDetailsQuery<DetailsResponse>, object>
  transform?: (arg: AssertsShape<T>) => MutationPayload
  transformResponse?: (arg: DetailsResponse) => AssertsShape<T>
  additionalTypenames?: string[]
}

export function useEditViewHook<
  T extends FieldValues,
  DetailsResponse,
  MutationPayload,
  MutationResponse extends MutationResponseType
>(
  props: UseEditViewProps<T, DetailsResponse, MutationPayload, MutationResponse>
) {
  const { notifySuccess, notifyError } = useNotificationStore()
  const { ability } = useAuthStore()
  const {
    useMutationHook,
    schema,
    transform = (a) => a,
    name,
    redirectBaseUrl,
    useDetailsQueryHook,
    transformResponse = (arg) => schema.noUnknown().cast(arg),
    additionalTypenames = [],
  } = props

  const formDisabled = ability?.cannot(PermissionEnum.Update, name)

  const router = useRouter()
  const id = router.query.id
  const [detailsQueryResponse] = useDetailsQueryHook({
    variables: {
      id,
    },
  })

  const [editMutationResponse, onUpdate] = useMutationHook()
  const formProps = useForm({
    defaultValues: schema.cast({}) as DeepPartial<AssertsShape<T>>,
    resolver: yupResolver(schema, { abortEarly: false }),
  })
  const { reset } = formProps

  useEffect(() => {
    if (detailsQueryResponse.data?.details) {
      reset(transformResponse(detailsQueryResponse.data?.details))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailsQueryResponse.data, reset, schema])

  function onSave() {
    formProps.handleSubmit(onValid)()
  }

  async function onValid(data: AssertsShape<T>) {
    const payload = transform(data) as MutationPayload
    const response = await onUpdate(
      {
        id: {
          id,
        },
        object: payload,
      },
      {
        additionalTypenames,
      }
    )
    if (response.error) {
      notifyError(`${name} did not update.`)
    } else {
      notifySuccess(`${name} successfully updated`)
      if (redirectBaseUrl) {
        router.push(redirectBaseUrl)
      }
    }
  }

  return {
    formProps,
    isFetching: detailsQueryResponse.fetching,
    isMutating: editMutationResponse.fetching,
    onSave,
    formDisabled,
  }
}
