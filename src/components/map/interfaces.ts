import { Feature } from 'geojson'
import { DrawOptions } from 'leaflet'
import { EditControlProps } from 'react-leaflet-draw'
import { IControlHandlerProps } from './consts'
import { Control } from 'leaflet'

export type IEditControlProps = EditControlProps &
  IControlHandlerProps & {
    draw: Control.DrawOptions
    edit?: DrawOptions.EditHandlerOptions
    initialLayers: Feature[]
  }

export type IGeoJsonLayerProps = {
  layers: Feature[]
  initialZoom: number
}
