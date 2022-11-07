import { IFilterValue } from '@/components/data-table/table-reducer'
import { FilterTypeEnum } from '@/components/list-filter/filter-type.enum'
import groupBy from 'lodash/groupBy'

const filterTypeValueMapping = {
  [FilterTypeEnum.IsNull]: '_isNull',
  [FilterTypeEnum.IsNotNull]: '_isNotNull',
  [FilterTypeEnum.Contains]: '_like',
  [FilterTypeEnum.NotContains]: '_nlike',
  [FilterTypeEnum.StartsWith]: '_like',
  [FilterTypeEnum.EndsWith]: '_like',
  [FilterTypeEnum.Is]: '_eq',
  [FilterTypeEnum.IsNot]: '_neq',
  [FilterTypeEnum.GreaterThan]: '_gt',
  [FilterTypeEnum.GreaterThanEqual]: '_gte',
  [FilterTypeEnum.LessThan]: '_lt',
  [FilterTypeEnum.LessThanEqual]: '_lte',
  [FilterTypeEnum.Are]: '_hasKeysAny',
}

export default function transformFilter(filters: IFilterValue[]) {
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

function transformFilterValue(filter: IFilterValue) {
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
