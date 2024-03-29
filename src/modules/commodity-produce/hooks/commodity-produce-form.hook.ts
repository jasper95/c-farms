import {
  useCommodityOptionsQuery,
  useFarmOptionsQuery,
} from '@/modules/commodity-produce/api/queries'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { UseFormReturn, useWatch } from 'react-hook-form'
import { ICommodityProduceSchema } from '../constants/commodity-produce-schema'
import { OrderBy } from '@/lib/generated/graphql.types'

interface ICommodityProduceFormProps {
  formProps: UseFormReturn<ICommodityProduceSchema>
}

export function useCommodityProduceFormHook(props: ICommodityProduceFormProps) {
  const router = useRouter()
  const [commodityListOptionsResponse] = useCommodityOptionsQuery({
    variables: {
      orderBy: { name: OrderBy.Asc },
    },
  })
  const commodityProduceFormProps = props.formProps

  const { getValues: produceGetValues } = commodityProduceFormProps
  const { setValue: produceSetValue } = commodityProduceFormProps

  const selectedCommodity = useWatch({
    control: commodityProduceFormProps.control,
    name: 'commodityId',
  })

  const farmSize = useWatch({
    control: commodityProduceFormProps.control,
    name: 'farmId',
  })

  const produceInUnit = useWatch({
    control: commodityProduceFormProps.control,
    name: 'produceInUnit',
  })

  const commodityOptions = useMemo(() => {
    return (
      commodityListOptionsResponse.data?.list.map((commodity) => ({
        label: commodity.name,
        value: commodity.id,
        unit: commodity.unit,
        factor: commodity.conversionFactor,
      })) ?? []
    )
  }, [commodityListOptionsResponse.data])

  const [farmListOptionsResponse] = useFarmOptionsQuery({
    variables: {
      where: {
        householdId: {
          _eq: router.query.id,
        },
      },
    },
  })

  const farmOptions = useMemo(() => {
    return (
      farmListOptionsResponse.data?.list.map((farm) => ({
        label: farm.name,
        value: farm.id,
        size: farm.sizeInHaTotal,
      })) ?? []
    )
  }, [farmListOptionsResponse.data])

  const commodity = commodityOptions.find(
    (option) => option.value === produceGetValues('commodityId')
  )

  const farm = farmOptions.find(
    (option) => option.value === produceGetValues('farmId')
  )

  useEffect(() => {
    produceSetValue('unit', commodity?.unit ?? '')
    produceSetValue('farmSize', farm?.size ?? '0')
    produceSetValue(
      'produce',
      commodity?.factor * produceGetValues('produceInUnit')
    )
  }, [
    commodity,
    commodityOptions,
    produceGetValues,
    produceSetValue,
    produceInUnit,
    farm,
  ])

  return {
    commodityOptions,
    farmOptions,
  }
}
