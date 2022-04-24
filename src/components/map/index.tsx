import { useEffect, useRef, useState } from 'react'
import {
  FeatureGroup,
  MapContainer,
  TileLayer,
  GeoJSONProps,
} from 'react-leaflet'
import EditControl from './edit-control'
import { osmProviders } from './osm-providers'
import { Feature } from 'geojson'

const MapWrapper = () => {
  const [layers, setLayers] = useState<Feature[]>([])
  const featGroupRef = useRef()
  useEffect(() => {
    if (featGroupRef.current) {
      console.log('featGroupRef: ', featGroupRef)
    }
  }, [])
  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: `calc(100vh - 192px)`, width: '100%' }}
      >
        <TileLayer {...osmProviders} />
        <FeatureGroup>
          <EditControl
            position="topright"
            initialLayers={layers}
            draw={{
              polyline: false,
              circlemarker: false,
              marker: false,
              polygon: {
                allowIntersection: false,
              },
            }}
          />
        </FeatureGroup>
      </MapContainer>
    </div>
  )
}

export default MapWrapper
