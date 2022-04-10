import { useReducer } from 'react'
import tableReducer, { tableInitialState } from './table-reducer'

export function useTableState() {
  return useReducer(tableReducer, tableInitialState)
}
