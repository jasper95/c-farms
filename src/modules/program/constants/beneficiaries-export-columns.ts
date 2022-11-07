import { ExportOf } from '@/lib/hooks/use-list-view.hook'
import { BeneficiariesListRow } from '../interfaces/beneficiares-list-row'

export const householdBeneficiariesExportColumns: ExportOf<BeneficiariesListRow> =
  [
    'firstName',
    'lastName',
    'barangay',
    'farmSize',
    'commodityNames',
    'mainLivelihood',
    'grossAnnualIncomeFarming',
    'grossAnnualIncomeNonfarming',
  ]
