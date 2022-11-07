import { yupResolver } from '@hookform/resolvers/yup'
import keyBy from 'lodash/keyBy'
import { useEffect, useMemo } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { IFilter, IFilterValue } from '../data-table/table-reducer'
import { filterSchema } from './filter-form-schema'
import { FilterTypeEnum } from './filter-type.enum'
import getFilterList from './get-filter-list'
import { nanoid } from 'nanoid'

interface UseFilterOptionsHookProps {
  filters: IFilter[]
  onAddFilter: (filter: IFilterValue) => void
}
export function useFilterOptionsHook(props: UseFilterOptionsHookProps) {
  const { filters, onAddFilter } = props
  const formProps = useForm({
    defaultValues: filterSchema.cast({}),
    resolver: yupResolver(filterSchema, { abortEarly: false }),
  })
  const { control, setValue } = formProps
  const field = useWatch({ control, name: 'field' })
  const typeValue = useWatch({ control, name: 'type' })
  const filterTypesMap = useMemo(() => keyBy(filters, 'field'), [filters])
  const selectedFilter = useMemo(
    () => filterTypesMap[field],
    [filterTypesMap, field]
  )
  const typeOptions = useMemo(() => {
    if (selectedFilter) {
      return getFilterList(selectedFilter.type)
    }
    return []
  }, [selectedFilter])
  useEffect(() => {
    if (typeValue === FilterTypeEnum.IsNotNull) {
      setValue('value', false)
    }
    if (typeValue === FilterTypeEnum.IsNull) {
      setValue('value', true)
    }
  }, [typeValue, setValue])

  function onClickAdd() {
    formProps.handleSubmit(onValid)()
  }

  function onValid() {
    const formValues = formProps.getValues()
    let options
    if (Array.isArray(formValues.value) && Array.isArray(formValues.options)) {
      options = formValues.options.filter((e) =>
        formValues.value.includes(e.value)
      )
    } else if (Array.isArray(formValues.options)) {
      options = formValues.options.filter((e) => formValues.value === e.value)
    }
    onAddFilter({
      ...formValues,
      options,
      label: filterTypesMap[formValues.field]!.label,
      typeLabel: typeOptions.find((e) => e.value === formValues.type)!.label,
      fieldType: selectedFilter!.type,
      id: nanoid(),
    })
  }

  return {
    formProps,
    typeOptions,
    onClickAdd,
    selectedFilter,
  }
}
