import { ReactNode } from 'react'

export type ColumnSort = {
  column: string
  direction: 'asc' | 'desc'
}

export interface Identifiable {
  id: any
}

export type ColumnType<T = any> = {
  title?: string
  accessor?: keyof T
  type?: 'function' | 'actions' | 'component' | 'value'
  headProps?: object
  component?: React.FC<any>
  componentProps?: object
  bodyProps?: object
  fn?: (row: T, index: number) => React.ReactNode
  actions?: ActionType<T>[]
  sortable?: boolean
}

type ActionType<T> = {
  label: string
  className?: string
  icon: React.FC<any>
  onClick?: (row: T) => void
  type?: 'button' | 'link'
  href?: (arg: T) => string
  conditionalRendering?: (arg: T) => boolean
}

export type RowProp<T> = {
  row: T
  index: number
  column: ColumnType<T>
}
