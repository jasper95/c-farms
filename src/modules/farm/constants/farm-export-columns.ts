import { ExportOf } from '@/lib/hooks/use-list-view.hook'
import { FarmListRowInterface } from '../interfaces'

export const farmExportColumns: ExportOf<FarmListRowInterface> = [
  'name',
  'firstName',
  'lastName',
  'ownerName',
  'ownershipType',
  'sizeInHaTotal',
]
