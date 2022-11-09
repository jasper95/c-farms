import { HouseholdDetailsRoutesEnum } from '@/modules/household/enums'

export const householdDetailsTab = [
  {
    label: 'Details',
    value: HouseholdDetailsRoutesEnum.Primary,
  },
  {
    label: 'Secondary',
    value: HouseholdDetailsRoutesEnum.Secondary,
  },
  {
    label: 'Annual Info',
    value: HouseholdDetailsRoutesEnum.AnnualInfo,
  },
  {
    label: 'Farms',
    value: HouseholdDetailsRoutesEnum.Farm,
  },
  {
    label: 'Commodity Produce',
    value: HouseholdDetailsRoutesEnum.CommodityProduce,
  },
]
