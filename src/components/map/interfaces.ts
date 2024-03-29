import { Feature } from 'geojson'
import { DrawOptions, LatLngExpression } from 'leaflet'
import { EditControlProps } from 'react-leaflet-draw'
import { IControlHandlerProps } from './consts'
import { Control } from 'leaflet'
import { ComponentType } from 'react'

export interface IMapProps<T> {
  layers: Feature[]
  onCreateFeature?: (arg: any) => void
  isEditable?: boolean
  popupData?: T[]
  popupComponent?: ComponentType<{ data: T }>
  height?: string
  zoom?: number
}

export type IEditControlProps = EditControlProps &
  IControlHandlerProps & {
    draw: Control.DrawOptions
    edit?: DrawOptions.EditHandlerOptions
    initialLayers: Feature[]
  }

export type IGeoJsonLayerProps<T> = {
  layers: Feature[]
  initialZoom: number
  popupData?: T[]
  popupComponent?: ComponentType<{ data: T }>
  getMarkerColor?: (arg: T) => string
}

export type PopupState<T> = {
  data: T
  position: LatLngExpression
}
