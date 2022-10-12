import { useCommodityOptionsQuery } from '@/modules/commodity-produce/api/queries'
import { useMemo } from 'react'

export function useCommodityProduceFormHook() {
  const [commodityListOptionsResponse] = useCommodityOptionsQuery()
  const commodityOptions = useMemo(() => {
    return (
      commodityListOptionsResponse.data?.list.map((commodity) => ({
        label: commodity.commodity,
        value: commodity.id,
      })) ?? []
    )
  }, [commodityListOptionsResponse.data])
  return {
    commodityOptions,
  }
}
