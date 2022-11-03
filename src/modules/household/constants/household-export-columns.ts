import { ExportOf } from '@/lib/hooks/use-list-view.hook'
import { HouseholdListRow } from './household-list-columns'

export const householdExportColumns: ExportOf<HouseholdListRow> = [
  'firstName',
  'lastName',
  'referenceNo',
]
