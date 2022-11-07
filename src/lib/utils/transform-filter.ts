import { IBaseFilterValue } from '@/components/data-table/table-reducer'
import { FilterTypeEnum } from '@/components/list-filter/filter-type.enum'
import groupBy from 'lodash/groupBy'

const filterTypeValueMapping = {
  [FilterTypeEnum.IsNull]: '_isNull',
  [FilterTypeEnum.IsNotNull]: '_isNotNull',
  [FilterTypeEnum.Contains]: '_ilike',
  [FilterTypeEnum.NotContains]: '_nilike',
  [FilterTypeEnum.StartsWith]: '_ilike',
  [FilterTypeEnum.EndsWith]: '_ilike',
  [FilterTypeEnum.Is]: '_eq',
  [FilterTypeEnum.IsNot]: '_neq',
  [FilterTypeEnum.GreaterThan]: '_gt',
  [FilterTypeEnum.GreaterThanEqual]: '_gte',
  [FilterTypeEnum.LessThan]: '_lt',
  [FilterTypeEnum.LessThanEqual]: '_lte',
  [FilterTypeEnum.Are]: '_hasKeysAny',
}

export default function transformFilter(filters: IBaseFilterValue[]) {
  return Object.entries(groupBy(filters, 'field')).map(
    ([field, fieldFilters]) => ({
      _or: fieldFilters.map((filter) => ({
        [field]: {
          [filterTypeValueMapping[filter.type]]: transformFilterValue(filter),
        },
      })),
    })
  )
}

export function transformSearchFilter(searchValue: string, fields: string[]) {
  return fields.map((field) => ({
    [field]: {
      [filterTypeValueMapping[FilterTypeEnum.Contains]]: transformFilterValue({
        type: FilterTypeEnum.Contains,
        value: searchValue,
        field,
      }),
    },
  }))
}

function transformFilterValue(filter: IBaseFilterValue) {
  switch (filter.type) {
    case FilterTypeEnum.NotContains:
    case FilterTypeEnum.Contains:
      return `%${filter.value}%`
    case FilterTypeEnum.StartsWith:
      return `${filter.value}%`
    case FilterTypeEnum.EndsWith:
      return `%${filter.value}`
    default:
      return filter.value
  }
}
