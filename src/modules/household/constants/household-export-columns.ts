import { ExportOf } from '@/lib/hooks/use-list-view.hook'
import { HouseholdListRow } from './household-list-columns'

export const householdExportColumns: ExportOf<HouseholdListRow> = [
  'referenceNo',
  'firstName',
  'middleName',
  'lastName',
  'barangay',
  'ipMembership',
  'is4psBeneficiary',
  'maleCount',
  'femaleCount',
]
