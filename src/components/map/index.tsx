import { useEffect, useState } from 'react'
import { FeatureGroup, MapContainer, TileLayer } from 'react-leaflet'
import EditControl from './edit-control'
import { osmProviders } from './osm-providers'
import { LeafletEvent } from 'leaflet'
import GeoJsonLayer from './geojson-layer'
import { IMapProps } from './interfaces'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

export default function Map<T>(props: IMapProps<T>) {
  const {
    layers,
    onCreateFeature,
    isEditable,
    popupComponent,
    popupData,
    height = 'calc(100vh - 220px)',
    zoom = 18,
  } = props

  const [geoJsonKey, setGeoJsonKey] = useState(1)
  useEffect(() => {
    setGeoJsonKey((prev) => prev + 1)
  }, [layers])

  return (
    <div>
      <MapContainer
        center={[9.818660000000023, 124.4955900000001]}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height, width: '100%' }}
      >
        <TileLayer {...osmProviders} />
        {isEditable && (
          <FeatureGroup>
            <EditControl
              position="topright"
              initialLayers={[]}
              draw={{
                circle: false,
                rectangle: false,
                polyline: false,
                circlemarker: false,
                marker: false,
                polygon: {
                  allowIntersection: false,
                },
              }}
              onCreated={(e: LeafletEvent) => {
                if (onCreateFeature) {
                  onCreateFeature(e.layer.toGeoJSON())
                }
              }}
            />
          </FeatureGroup>
        )}
        <GeoJsonLayer
          popupComponent={popupComponent}
          key={geoJsonKey}
          initialZoom={zoom}
          layers={layers}
          popupData={popupData}
        />
      </MapContainer>
    </div>
  )
}
