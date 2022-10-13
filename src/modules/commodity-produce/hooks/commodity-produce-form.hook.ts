import {
  useCommodityOptionsQuery,
  useFarmOptionsQuery,
} from '@/modules/commodity-produce/api/queries'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export function useCommodityProduceFormHook() {
  const router = useRouter()
  const [commodityListOptionsResponse] = useCommodityOptionsQuery()
  const [farmListOptionsResponse] = useFarmOptionsQuery({
    variables: {
      where: {
        householdId: {
          _eq: router.query.id,
        },
      },
    },
  })
  const commodityOptions = useMemo(() => {
    return (
      commodityListOptionsResponse.data?.list.map((commodity) => ({
        label: commodity.name,
        value: commodity.id,
      })) ?? []
    )
  }, [commodityListOptionsResponse.data])

  const farmOptions = useMemo(() => {
    return (
      farmListOptionsResponse.data?.list.map((farm) => ({
        label: farm.name,
        value: farm.id,
      })) ?? []
    )
  }, [farmListOptionsResponse.data])
  return {
    commodityOptions,
    farmOptions,
  }
}
