import { FieldTypeEnum } from '../list-filter/field-type.enum'
import { FilterTypeEnum } from '../list-filter/filter-type.enum'
import { ColumnSort } from './types'

export interface IFilter {
  type: FieldTypeEnum
  field: string
  label: string
  options?: { label: string; value: string }[]
}

export interface IFilterValue {
  id: string
  type: FilterTypeEnum
  value: any
  typeLabel: string
  label: string
  field: string
  fieldType: FieldTypeEnum
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

export type RowSelectionPayload = {
  index: number
  checked: boolean
  rows: string[]
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
  if (action.type === 'SetSelected') {
    const { index, checked, rows } = action.payload
    const { selected } = state
    let arr = []
    if (index === 0) {
      arr = checked ? rows : []
    } else {
      const id = rows[index - 1]
      arr = checked ? [...selected, id] : selected.filter((e) => e !== id)
    }
    return { ...state, [key]: arr }
  }
  return { ...state, [key]: action.payload }
}

export type TableAction =
  | { type: 'SetSize'; payload: number }
  | { type: 'SetPage'; payload: number }
  | { type: 'SetSort'; payload: ColumnSort }
  | { type: 'SetSelected'; payload: RowSelectionPayload }
  | { type: 'ResetSelected' }
  | { type: 'SetSearch'; payload: string }
  | { type: 'SetTotal'; payload: number }
  | { type: 'SetFilters'; payload: IFilterValue[] }
  | { type: 'SetMetadata'; payload: Record<string, any> }
