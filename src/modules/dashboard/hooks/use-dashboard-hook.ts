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
import { orderBy } from 'lodash'
import { ASTValidationContext } from 'graphql/validation/ValidationContext'

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
        weight: crop.sum,
      })) ?? []
    )
  }, [cropProduceResponse.data])

  const crops = new Set(
    cropProduceRows.map((crop) => {
      return crop.name
    })
  )

  const uniqueCrops = Array.from(crops)

  const inventoryOfLivestockRows = useMemo(() => {
    return (
      inventoryOfLivestockResponse.data?.list.map((inventory) => ({
        name: inventory.name,
        year: inventory.year,
        heads: inventory.sum,
      })) ?? []
    )
  }, [inventoryOfLivestockResponse.data])

  const livestocks = new Set(
    inventoryOfLivestockRows.map((livestock) => {
      return livestock.name
    })
  )

  const uniqueLivestocks = Array.from(livestocks)

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
  }
}
