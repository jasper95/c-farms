import 'Leaflet.Deflate'
import L, { DeflateOptions } from 'leaflet'
import { useEffect } from 'react'
import { useLeafletContext, LeafletContextInterface } from '@react-leaflet/core'

export default function DeflateMap(props: DeflateOptions) {
  const context = useLeafletContext()
  useEffect(() => {
    const { map } = context
    const features = L.deflate(props)
    features.addTo(map)
  }, [])
  return null
}
