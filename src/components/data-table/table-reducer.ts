import { FieldTypeEnum } from '../list-filter/field-type.enum'
import { FilterTypeEnum } from '../list-filter/filter-type.enum'
import { ColumnSort } from './types'
import { Option } from '../select-field/interface'
import { AsyncFilterFieldProps } from '../list-filter/async-filter-field'

export interface IFilter {
  type: FieldTypeEnum
  field: string
  label: string
  options?: Option[]
  isMultiple?: boolean
  asyncProps?: Pick<
    AsyncFilterFieldProps,
    'useOptionsQueryHook' | 'variables' | 'transform'
  >
}

export interface IFilterValue extends IBaseFilterValue {
  id: string

  typeLabel: string
  label: string
  field: string
  fieldType: FieldTypeEnum
  options?: Option[]
  isMultiple?: boolean
}

export interface IBaseFilterValue {
  value: any
  field: string
  type: FilterTypeEnum
}

export type TableState = {
  size: number
  page: number
  total: number
  sort: ColumnSort[]
  selected: string[]
  search: string
  filters: IFilterValue[]
  metadata: Record<string, any>
}

export const tableInitialState: TableState = {
  size: 10,
  page: 0,
  sort: [],
  selected: [],
  search: '',
  total: 0,
  filters: [],
  metadata: {},
}

export default function tableReducer(
  state: TableState,
  action: TableAction
): TableState {
  if (action.type === 'SetSearch') {
    return {
      ...tableInitialState,
      search: action.payload,
      sort: state.sort,
    }
  }
  if (action.type === 'ResetSelected') {
    return { ...state, selected: [] }
  } else if (action.type === 'SetSort') {
    return { ...state, sort: [action.payload] }
  }
  const keyMappings = {
    SetSize: 'size',
    SetPage: 'page',
    SetSelected: 'selected',
    SetTotal: 'total',
    SetFilters: 'filters',
    SetMetadata: 'metadata',
  }
  const key = keyMappings[action.type]
  return { ...state, [key]: action.payload }
}

export type TableAction =
  | { type: 'SetSize'; payload: number }
  | { type: 'SetPage'; payload: number }
  | { type: 'SetSort'; payload: ColumnSort }
  | { type: 'SetSelected'; payload: string[] }
  | { type: 'ResetSelected' }
  | { type: 'SetSearch'; payload: string }
  | { type: 'SetTotal'; payload: number }
  | { type: 'SetFilters'; payload: IFilterValue[] }
  | { type: 'SetMetadata'; payload: Record<string, any> }
