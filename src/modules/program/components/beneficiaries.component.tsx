import { ProgramTypeEnum } from '@/modules/program/enums/program-type.enum'
import { useBeneficiaries } from '@/modules/program/hooks/use-beneficiaries.hook'
import { AssociationBeneficiaries } from './association-beneficiaries.component'
import { HouseholdBeneficiaries } from './household-beneficiaries.component'

export function Beneficiaries() {
  const { type } = useBeneficiaries()
  if (!type) {
    return null
  }
  if (type === ProgramTypeEnum.Household) {
    return <HouseholdBeneficiaries />
  }
  return <AssociationBeneficiaries />
}
