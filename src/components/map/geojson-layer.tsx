import { IGeoJsonLayerProps, PopupState } from './interfaces'
import { useMapEvents, GeoJSON, Marker, Popup } from 'react-leaflet'
import { useMemo, useState } from 'react'
import L from 'leaflet'
import { styled } from '@mui/material/styles'
import MarkerClusterGroup from './marker-clusterer'
import blue from '@mui/material/colors/blue'

const StyledPop = styled(Popup)(() => ({
  '& .leaflet-popup-content-wrapper': {
    background: 'unset',
    color: 'unset',
    boxShadow: 'unset',
  },
  '& .leaflet-popup-content': {
    margin: 'unset',
    lineHeight: 'unset',
    fontSize: 'unset',
    minHeight: 'unset',
    '& p': {
      margin: 'unset',
    },
  },
}))

export default function GeoJsonLayer<T>(props: IGeoJsonLayerProps<T>) {
  const {
    layers,
    initialZoom,
    popupData = [],
    popupComponent: PopupComponent,
    getMarkerColor = () => blue[500],
  } = props
  const [zoom, setZoom] = useState(initialZoom)
  const [popupState, setPopupState] = useState<PopupState<T> | null>(null)
  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoom(mapEvents.getZoom())
    },
    popupclose: () => {
      setPopupState(null)
    },
  })
  const layersCenter = useMemo(
    () => layers.map((layer) => new L.GeoJSON(layer).getBounds().getCenter()),
    [layers]
  )
  const popup = popupState && PopupComponent && (
    <StyledPop position={popupState.position}>
      <PopupComponent data={popupState.data} />
    </StyledPop>
  )
  if (zoom <= 15) {
    return (
      <>
        {popup}
        <MarkerClusterGroup eventHandlers={{}}>
          {layersCenter.map((position, key) => (
            <Marker
              eventHandlers={{
                click: () => {
                  if (popupData[key]) {
                    setPopupState({
                      position,
                      data: popupData[key] as T,
                    })
                  }
                },
              }}
              icon={
                new L.DivIcon({
                  className: '',
                  iconAnchor: [0, 24],
                  popupAnchor: [0, -36],
                  html: createCustomMarker(
                    getMarkerColor?.(popupData[key] as T) ?? ''
                  ),
                })
              }
              key={key}
              position={position}
            />
          ))}
        </MarkerClusterGroup>
      </>
    )
  }
  return (
    <>
      {popup}
      {layers.map((layer, key) => (
        <GeoJSON
          eventHandlers={{
            click: () => {
              if (popupData[key]) {
                setPopupState({
                  position: new L.GeoJSON(layer).getBounds().getCenter(),
                  data: popupData[key] as T,
                })
              }
            },
          }}
          key={key}
          data={layer}
        />
      ))}
    </>
  )
}

function createCustomMarker(color: string) {
  return `<span style="background-color: ${color};
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    left: -0.75rem;
    top: -0.75rem;
    position: relative;
    border-radius: 1.5rem 1.5rem 0;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF" />
  `
}
