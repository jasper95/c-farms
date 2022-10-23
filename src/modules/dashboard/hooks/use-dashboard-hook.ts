import { OrderBy } from '@/lib/generated/graphql.types'
import { useMemo } from 'react'
import {
  useAverageAnnualIncomeListQuery,
  useCropProduceListQuery,
  useDashboardStatsQuery,
  useInventoryOfLivestockListQuery,
  useRegisteredHouseholdQuery,
} from '../api/queries'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import blue from '@mui/material/colors/blue'
import green from '@mui/material/colors/green'
import red from '@mui/material/colors/red'
import yellow from '@mui/material/colors/yellow'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import GrassIcon from '@mui/icons-material/Grass'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { useForm, useWatch } from 'react-hook-form'
import { dashboardFormSchema } from '../constants/dashboard-form-schema'
import { isEqual, uniqWith } from 'lodash'

export function useDashboardHook() {
  const [averageAnnualIncomeResponse] = useAverageAnnualIncomeListQuery({
    variables: {
      orderBy: { year: OrderBy.Asc },
    },
  })

  const [cropProduceResponse] = useCropProduceListQuery({
    variables: {
      orderBy: { year: OrderBy.Asc },
    },
  })

  const dashboardFormProps = useForm({
    defaultValues: dashboardFormSchema.cast({}),
  })

  const livestock = useWatch({
    control: dashboardFormProps.control,
    name: 'livestock',
  })

  const crop = useWatch({
    control: dashboardFormProps.control,
    name: 'crop',
  })

  const [inventoryOfLivestockResponse] = useInventoryOfLivestockListQuery({
    variables: {
      orderBy: { year: OrderBy.Asc },
    },
  })

  const [dashboardStats] = useDashboardStatsQuery()
  const [registeredHouseholdResponse] = useRegisteredHouseholdQuery({
    variables: {
      orderBy: { year: OrderBy.Asc },
    },
  })
  const stats = [
    {
      label: 'Households',
      value: dashboardStats?.data?.households?.aggregate?.count ?? 0,
      icon: AccountCircleIcon,
      color: blue[500],
    },
    {
      label: 'Associations',
      value: dashboardStats?.data?.associations?.aggregate?.count ?? 0,
      icon: Diversity3Icon,
      color: red[500],
    },
    {
      label: 'Farms',
      value: dashboardStats?.data?.farms?.aggregate?.count ?? 0,
      icon: GrassIcon,
      color: green[500],
    },
    {
      label: 'Programs',
      value: dashboardStats?.data?.programs?.aggregate?.count ?? 0,
      icon: ListAltIcon,
      color: yellow[500],
    },
  ]
  const registeredHousehold = useMemo(() => {
    return (
      registeredHouseholdResponse.data?.list.map((household) => ({
        count: household.count,
        year: household.year,
      })) ?? []
    )
  }, [registeredHouseholdResponse.data])

  const cropProduceRows = useMemo(() => {
    return (
      cropProduceResponse.data?.list.map((crop) => ({
        name: crop.name,
        year: crop.year,
        volume: crop.sum,
        cropId: crop.commodityId,
      })) ?? []
    )
  }, [cropProduceResponse.data])

  const uniqueCrops = uniqWith(
    cropProduceRows.map((crop) => {
      return {
        label: crop.name,
        value: crop.cropId,
      }
    }),
    _.isEqual
  )

  const inventoryOfLivestockRows = useMemo(() => {
    return (
      inventoryOfLivestockResponse.data?.list.map((inventory) => ({
        name: inventory.name,
        year: inventory.year,
        heads: inventory.sum,
        livestockId: inventory.commodityId,
      })) ?? []
    )
  }, [inventoryOfLivestockResponse.data])

  const filteredLiveStock = useMemo(
    () => inventoryOfLivestockRows.filter((el) => el.livestockId === livestock),
    [livestock, inventoryOfLivestockRows]
  )

  const filteredCrop = useMemo(
    () => cropProduceRows.filter((cp) => cp.cropId === crop),
    [crop, cropProduceRows]
  )

  const uniqueLivestocks = uniqWith(
    inventoryOfLivestockRows.map((livestock) => {
      return {
        label: livestock.name,
        value: livestock.livestockId,
      }
    }),
    isEqual
  )

  uniqueLivestocks.map((livestock) => console.log('unique: ' + livestock.value))
  const averageAnnualIncomeRows = useMemo(() => {
    return (
      averageAnnualIncomeResponse.data?.list.map((averageAnnualIncome) => ({
        totalIncome: averageAnnualIncome.averageinfo,
        incomeFarming: averageAnnualIncome.annualIncomeFarming,
        incomeNonfarming: averageAnnualIncome.annualIncomeNonfarming,
        year: averageAnnualIncome.year,
      })) ?? []
    )
  }, [averageAnnualIncomeResponse.data])

  return {
    averageAnnualIncomeRows,
    stats,
    inventoryOfLivestockRows,
    cropProduceRows,
    registeredHousehold,
    uniqueLivestocks,
    uniqueCrops,
    dashboardFormProps,
    filteredLiveStock,
    filteredCrop,
  }
}
