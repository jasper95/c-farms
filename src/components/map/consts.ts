import { LeafletEvent } from 'leaflet'

export const controlsEventHandlers = {
  onEdited: 'draw:edited',
  onDrawStart: 'draw:drawstart',
  onDrawStop: 'draw:drawstop',
  onDrawVertex: 'draw:drawvertex',
  onEditStart: 'draw:editstart',
  onEditMove: 'draw:editmove',
  onEditResize: 'draw:editresize',
  onEditVertex: 'draw:editvertex',
  onEditStop: 'draw:editstop',
  onDeleted: 'draw:deleted',
  onDeleteStart: 'draw:deletestart',
  onDeleteStop: 'draw:deletestop',
} as const

export type IControlsEventHandlers = typeof controlsEventHandlers
export type IControlHandlerKey = keyof IControlsEventHandlers
export type IControlHandlerValue = IControlsEventHandlers[IControlHandlerKey]
export const controlsEvents = Object.values(controlsEventHandlers)
export const controlsHandlers = Object.keys(
  controlsEventHandlers
) as IControlHandlerKey[]

export type IControlHandlerProps = {
  [key in IControlHandlerKey]?: (event: LeafletEvent) => void
}
