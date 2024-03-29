import 'leaflet-draw'
import isEqual from 'fast-deep-equal'
import React, { useRef } from 'react'
import { useLeafletContext, LeafletContextInterface } from '@react-leaflet/core'
import leaflet, { Control, FeatureGroup } from 'leaflet'
import { IEditControlProps } from './interfaces'
import {
  controlsEventHandlers,
  controlsEvents,
  IControlHandlerValue,
  IControlHandlerKey,
  controlsHandlers,
} from './consts'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// @ts-ignore
delete leaflet.Icon.Default.prototype._getIconUrl
leaflet.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
})
function EditControl(props: IEditControlProps) {
  const context = useLeafletContext()
  const drawRef = useRef<Control.Draw>()
  const propsRef = useRef(props)

  const onDrawCreate = (e: leaflet.LeafletEvent) => {
    const { onCreated } = props
    const container = context.layerContainer || context.map
    // container.addLayer(e.layer)
    onCreated && onCreated(e)
  }

  React.useEffect(() => {
    const { map } = context
    const { onMounted } = props

    controlsEvents.forEach((value) => {
      map.on(value, (evt) => {
        const type = evt.type as IControlHandlerValue
        let handlers = controlsHandlers.filter(
          (handler) => controlsEventHandlers[handler] === type
        )
        if (handlers.length === 1) {
          let handler = handlers[0] as IControlHandlerKey
          props[handler] && props[handler]?.(evt)
        }
      })
    })
    map.on(leaflet.Draw.Event.CREATED, onDrawCreate)
    drawRef.current = createDrawElement(props, context)
    map.addControl(drawRef.current)
    onMounted && onMounted(drawRef.current)

    return () => {
      map.off(leaflet.Draw.Event.CREATED, onDrawCreate)
      controlsHandlers.forEach((key) => {
        if (props[key]) {
          map.off(controlsEventHandlers[key], props[key])
        }
      })
    }
  }, [])

  React.useEffect(() => {
    if (
      isEqual(props.draw, propsRef.current.draw) &&
      isEqual(props.edit, propsRef.current.edit) &&
      props.position === propsRef.current.position
    ) {
      return
    }
    const { map } = context
    drawRef.current?.remove()
    drawRef.current = createDrawElement(props, context)
    drawRef.current.addTo(map)

    const { onMounted } = props
    onMounted && onMounted(drawRef.current)
  }, [props.draw, props.edit, props.position])

  return null
}

function createDrawElement(
  props: IEditControlProps,
  context: LeafletContextInterface
) {
  const { layerContainer } = context
  const { draw, edit, position, initialLayers } = props
  if (initialLayers) {
    // initialLayers.forEach((json) => {
    //   leaflet.geoJSON(json, {
    //     onEachFeature: function (feature, layer) {
    //       layerContainer?.addLayer(layer)
    //     },
    //   })
    // })
  }

  const options: Control.DrawConstructorOptions = {
    edit: {
      ...(edit && { edit }),
      edit: false,
      remove: false,
      featureGroup: layerContainer as FeatureGroup,
    },
  }

  if (draw) {
    options.draw = draw
  }

  if (position) {
    options.position = position
  }

  return new Control.Draw(options)
}

export default EditControl
