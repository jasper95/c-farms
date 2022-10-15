import { IGeoJsonLayerProps } from './interfaces'
import { useMapEvents, GeoJSON, Marker, Popup } from 'react-leaflet'
import { useMemo, useState } from 'react'
import L from 'leaflet'
import MarkerClusterGroup from './marker-clusterer'

export default function GeoJsonLayer<T>(props: IGeoJsonLayerProps<T>) {
  const {
    layers,
    initialZoom,
    popupData = [],
    popupComponent: PopupComponent,
  } = props
  const [zoom, setZoom] = useState(initialZoom)
  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoom(mapEvents.getZoom())
    },
  })
  const layersCenter = useMemo(
    () => layers.map((layer) => new L.GeoJSON(layer).getBounds().getCenter()),
    [layers]
  )
  if (zoom <= 15) {
    return (
      <MarkerClusterGroup>
        {layersCenter.map((position, key) => (
          <Marker key={key} position={position}>
            {popupData && PopupComponent && (
              <Popup>
                <PopupComponent data={popupData[key] as T} />
              </Popup>
            )}
          </Marker>
        ))}
      </MarkerClusterGroup>
    )
  }
  return (
    <>
      {layers.map((layer, key) => (
        <GeoJSON key={key} data={layer}>
          {popupData && PopupComponent && (
            <Popup>
              <PopupComponent data={popupData[key] as T} />
            </Popup>
          )}
        </GeoJSON>
      ))}
    </>
  )
}
