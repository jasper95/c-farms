import { useEffect, useState } from 'react'
import { FeatureGroup, MapContainer, TileLayer } from 'react-leaflet'
import EditControl from './edit-control'
import { osmProviders } from './osm-providers'
import { LeafletEvent } from 'leaflet'
import GeoJsonLayer from './geojson-layer'
import { IMapProps } from './interfaces'

export default function Map<T = any>(props: IMapProps<T>) {
  const { layers, onCreateFeature, isEditable, popupComponent, popupData } =
    props

  const [geoJsonKey, setGeoJsonKey] = useState(1)
  useEffect(() => {
    setGeoJsonKey((prev) => prev + 1)
  }, [layers])

  return (
    <div>
      <MapContainer
        center={[9.818660000000023, 124.4955900000001]}
        zoom={18}
        scrollWheelZoom={false}
        style={{ height: `calc(100vh - 192px)`, width: '100%' }}
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
          initialZoom={18}
          layers={layers}
          popupData={popupData}
        />
      </MapContainer>
    </div>
  )
}
