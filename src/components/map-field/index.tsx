import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { FieldValues, useController } from 'react-hook-form'
import { IMapFieldProps } from './interface'

const Map = dynamic(() => import('@/components/map'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

export default function MapField<T extends FieldValues>(
  props: IMapFieldProps<T>
) {
  const { control, name } = props
  const { field } = useController({
    control,
    name,
  })
  const layers = useMemo(
    () => (field.value ? [field.value] : []),
    [field.value]
  )
  return (
    <Map
      isEditable
      onCreateFeature={(layer) => {
        field.onChange(layer)
      }}
      layers={layers}
      height="calc(100vh - 260px)"
    />
  )
}
