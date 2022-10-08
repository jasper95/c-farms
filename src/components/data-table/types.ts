import { Dispatch, ReactNode } from 'react'
import { TableAction, TableState } from './table-reducer'

export type ColumnSort = {
  column: string
  direction: 'asc' | 'desc'
}

export interface Identifiable {
  id: any
}

export type DataTableColumn<T extends Identifiable> = {
  title?: string
  accessor?: keyof T
  type?: 'function' | 'actions' | 'component' | 'value'
  headProps?: object
  component?: React.FC<any>
  componentProps?: object
  bodyProps?: object
  fn?: (row: T, index: number) => React.ReactNode
  actions?: DataTableAction<T>[]
  sortable?: boolean
}

export type DataTableAction<T extends Identifiable> = {
  label: string
  className?: string
  icon: React.FC<any>
  onClick?: (row: T) => void
  type?: 'button' | 'link'
  href?: (arg: T) => string
  conditionalRendering?: (arg: T) => boolean
}

export type RowProp<T extends Identifiable> = {
  row: T
  index: number
  column: DataTableColumn<T>
}

export type DataTableProps<T extends Identifiable> = {
  rows: T[]
  totalRows: number
  columns: DataTableColumn<T>[]
  onRowClick: (row: T) => void
  className: string
  isSelectable: boolean
  onSort: (column: string) => void
  sort: ColumnSort[]
  onRowToggle: () => void
  pageSizes: number[]
  showPagination?: boolean
  tableState?: TableState
  tableDispatch?: Dispatch<TableAction<T>>
  isLoading?: boolean
  rowClassName?: (row: T) => string
  checkedItems?: string[]
  rowCheckboxEnabled?: (row: T) => boolean
  actions?: DataTableAction<T>[]
}
