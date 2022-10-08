import { useEffect, useRef, useState } from 'react'
import { FeatureGroup, MapContainer, TileLayer } from 'react-leaflet'
import EditControl from './edit-control'
import { osmProviders } from './osm-providers'
import { Feature } from 'geojson'
import { LeafletEvent } from 'leaflet'
import GeoJsonLayer from './geojson-layer'

const MapWrapper = () => {
  const [layers, setLayers] = useState<Feature[]>([
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [124.494368, 9.818987],
            [124.494359, 9.818731],
            [124.49455, 9.818652],
            [124.494824, 9.818598],
            [124.494368, 9.818987],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [124.494292, 9.81809],
            [124.49516, 9.817953],
            [124.495435, 9.818228],
            [124.494292, 9.81809],
          ],
        ],
      },
    },
  ])
  return (
    <div>
      <MapContainer
        center={[9.818660000000023, 124.4955900000001]}
        zoom={18}
        scrollWheelZoom={false}
        style={{ height: `calc(100vh - 192px)`, width: '100%' }}
      >
        <TileLayer {...osmProviders} />
        <FeatureGroup>
          <EditControl
            position="topright"
            initialLayers={layers}
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
              setLayers(layers.concat(e.layer.toGeoJSON()))
            }}
          />
        </FeatureGroup>
        <GeoJsonLayer initialZoom={18} layers={layers} />
      </MapContainer>
    </div>
  )
}

export default MapWrapper
