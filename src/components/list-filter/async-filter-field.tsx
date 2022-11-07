import { UseFormReturn, useWatch } from 'react-hook-form'
import * as Urql from 'urql'
import {
  BaseListQuery,
  BaseListVariables,
} from '@/lib/hooks/use-list-view.hook'
import { IFilter } from '../data-table/table-reducer'
import { FieldTypeEnum } from './field-type.enum'
import { Option } from '../select-field/interface'
import { IFilterFormSchema } from './filter-form-schema'
import SelectField from '../select-field'
import { useEffect, useMemo } from 'react'
import MultiSelectField from '../multi-select-field'

export interface AsyncFilterFieldProps<
  QueryResponse = any,
  QueryVariables extends Record<string, any> = {}
> {
  formProps: UseFormReturn<IFilterFormSchema>
  selectedFilter: IFilter
  variables: QueryVariables
  transform: (arg: QueryResponse[]) => Option[]
  useOptionsQueryHook(
    options?: Omit<
      Urql.UseQueryArgs<BaseListVariables<QueryVariables>>,
      'query'
    >
  ): Urql.UseQueryResponse<BaseListQuery<QueryResponse>, object>
}
export function AsyncFilterField<
  QueryResponse,
  QueryVariables extends Record<string, any>
>(props: AsyncFilterFieldProps<QueryResponse, QueryVariables>) {
  const {
    useOptionsQueryHook,
    variables,
    transform,
    selectedFilter,
    formProps,
  } = props
  const { control, setValue } = formProps
  const [response] = useOptionsQueryHook({
    variables: {
      where: {
        ...(variables && variables),
      } as QueryVariables,
    },
  })
  const typeValue = useWatch({ control, name: 'type' })
  const options = useMemo(
    () => (response?.data ? transform(response?.data?.list) : []),
    [response?.data, transform]
  )
  useEffect(() => {
    setValue('options', options)
  }, [setValue, options])

  if (selectedFilter.type === FieldTypeEnum.Enumeration) {
    return (
      <SelectField
        control={control}
        options={response?.data ? transform(response?.data?.list) : []}
        label="Value"
        name="value"
        sx={{ mb: 2 }}
      />
    )
  } else if (selectedFilter.type === FieldTypeEnum.EnumerationMultiple) {
    return (
      <MultiSelectField
        control={control}
        options={response?.data ? transform(response?.data?.list) : []}
        label="Value"
        name="value"
        sx={{ mb: 2 }}
      />
    )
  }
  console.error(`Async Filter Field Type ${typeValue} not supported`)
  return null
}
