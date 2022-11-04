import * as Urql from 'urql'
import { BaseListVariables } from '@/lib/hooks/use-list-view.hook'
import { ISelectFieldProps, Option } from '../select-field/interface'
import SelectField from '../select-field'

export type BaseOptionsQuery = {
  options: Option[]
}

export interface AsyncSelectFieldProps<
  QueryVariables extends Record<string, any> = any
> extends Omit<
    ISelectFieldProps<{
      value: any
      label: string
    }>,
    'options'
  > {
  variables?: QueryVariables
  useOptionsQueryHook(
    options?: Omit<
      Urql.UseQueryArgs<BaseListVariables<QueryVariables>>,
      'query'
    >
  ): Urql.UseQueryResponse<BaseOptionsQuery, object>
}
export function AsyncSelectField<QueryVariables extends Record<string, any>>(
  props: AsyncSelectFieldProps<QueryVariables>
) {
  const { useOptionsQueryHook, variables, ...restProps } = props
  const [response] = useOptionsQueryHook({
    variables: {
      where: {
        ...(variables && variables),
      } as QueryVariables,
    },
  })
  return <SelectField {...restProps} options={response?.data?.options || []} />
}
