import { IGeoJsonLayerProps } from './interfaces'
import { useMapEvents, GeoJSON, Marker } from 'react-leaflet'
import { useMemo, useState } from 'react'
import L from 'leaflet'
import MarkerClusterGroup from './marker-clusterer'

export default function GeoJsonLayer(props: IGeoJsonLayerProps) {
  const { layers, initialZoom } = props
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
          <Marker key={key} position={position} />
        ))}
      </MarkerClusterGroup>
    )
  }
  return (
    <>
      {layers.map((layer, key) => (
        <GeoJSON
          pointToLayer={(feature, latlng) => {
            console.log('feature: ', feature)
            console.log('latlng: ', latlng)
            return L.circleMarker(latlng)
          }}
          key={key}
          data={layer}
        />
      ))}
    </>
  )
}
