import { OrderBy } from '@/lib/generated/graphql.types'
import { useMemo } from 'react'
import {
  useAverageAnnualIncomeListQuery,
  useDashboardStatsQuery,
  useInventoryOfLivestockListQuery,
} from '../api/queries'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import blue from '@mui/material/colors/blue'
import green from '@mui/material/colors/green'
import red from '@mui/material/colors/red'
import yellow from '@mui/material/colors/yellow'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import GrassIcon from '@mui/icons-material/Grass'
import ListAltIcon from '@mui/icons-material/ListAlt'

export function useDashboardHook() {
  const [averageAnnualIncomeResponse] = useAverageAnnualIncomeListQuery({
    variables: {
      orderBy: { year: OrderBy.Asc },
    },
  })

  const [inventoryOfLivestockResponse] = useInventoryOfLivestockListQuery()
  inventoryOfLivestockResponse.data?.list
  const [dashboardStats] = useDashboardStatsQuery()

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

  const inventoryOfLivestockRows = useMemo(() => {
    return (
      inventoryOfLivestockResponse.data?.list.map((inventory) => ({
        name: inventory.name,
        year: inventory.year,
        count: inventory.sum,
      })) ?? []
    )
  }, [inventoryOfLivestockResponse.data])
  return {
    averageAnnualIncomeRows,
    stats,
    inventoryOfLivestockRows,
  }
}
