import { FieldTypeEnum } from './field-type.enum'
import { FilterTypeEnum } from './filter-type.enum'

export function getFilterList(type: FieldTypeEnum) {
  console.log('type: ', type)
  switch (type) {
    case FieldTypeEnum.EnumerationMultiple:
      return [
        {
          label: 'are',
          value: FilterTypeEnum.Are,
        },
      ]
    case FieldTypeEnum.Enumeration:
      return [
        {
          label: 'is',
          value: FilterTypeEnum.Is,
        },
      ]
    case FieldTypeEnum.String: {
      return [
        {
          label: 'is',
          value: FilterTypeEnum.Is,
        },
        {
          label: 'is not',
          value: FilterTypeEnum.IsNot,
        },
        {
          label: 'is null',
          value: FilterTypeEnum.IsNull,
        },
        {
          label: 'is not null',
          value: FilterTypeEnum.IsNotNull,
        },
        {
          label: 'contains (sensitive)',
          value: FilterTypeEnum.Contains,
        },
        {
          label: 'not contains (sensitive)',
          value: FilterTypeEnum.NotContains,
        },
        {
          label: 'starts with',
          value: FilterTypeEnum.StartsWith,
        },
        {
          label: 'ends with',
          value: FilterTypeEnum.EndsWith,
        },
      ]
    }

    case FieldTypeEnum.Number: {
      return [
        {
          label: 'is',
          value: FilterTypeEnum.Is,
        },
        {
          label: 'is not',
          value: FilterTypeEnum.IsNot,
        },
        {
          label: 'is null',
          value: FilterTypeEnum.IsNull,
        },
        {
          label: 'is not null',
          value: FilterTypeEnum.IsNotNull,
        },
        {
          label: 'is greater than',
          value: FilterTypeEnum.GreaterThan,
        },
        {
          label: 'is greater than or equal to',
          value: FilterTypeEnum.GreaterThanEqual,
        },
        {
          label: 'is less than',
          value: FilterTypeEnum.LessThan,
        },
        {
          label: 'is greater than or equal to',
          value: FilterTypeEnum.GreaterThanEqual,
        },
      ]
    }
    case FieldTypeEnum.Date: {
      return [
        {
          label: 'is later than',
          value: FilterTypeEnum.GreaterThan,
        },
        {
          label: 'is on or later than',
          value: FilterTypeEnum.GreaterThanEqual,
        },
        {
          label: 'is before',
          value: FilterTypeEnum.LessThan,
        },
        {
          label: 'is on or before',
          value: FilterTypeEnum.LessThanEqual,
        },
      ]
    }

    // case 'datetime': {
    //   return [
    //     {
    //       label: 'is',
    //       value: FilterTypeEnum.Is,
    //     },
    //     {
    //       label: 'is not',
    //       value: FilterTypeEnum.IsNot,
    //     },
    //     {
    //       label: 'is null',
    //       value: FilterTypeEnum.IsNull,
    //     },
    //     {
    //       label: 'is not null',
    //       value: FilterTypeEnum.IsNotNull,
    //     },
    //     {
    //       label: 'is greater than',
    //       value: FilterTypeEnum.GreaterThan,
    //     },
    //     {
    //       label: 'is greater than or equal to',
    //       value: FilterTypeEnum.GreaterThanEqual,
    //     },
    //     {
    //       label: 'is less than',
    //       value: FilterTypeEnum.LessThan,
    //     },
    //     {
    //       label: 'is less than or equal to',
    //       value: FilterTypeEnum.GreaterThanEqual,
    //     },
    //   ]
    // }

    default:
      return [
        {
          label: 'is',
          value: FilterTypeEnum.Is,
        },
        {
          label: 'is not',
          value: FilterTypeEnum.IsNot,
        },
        {
          label: 'is null',
          value: FilterTypeEnum.IsNull,
        },
        {
          label: 'is not null',
          value: FilterTypeEnum.IsNotNull,
        },
      ]
  }
}

export default getFilterList
