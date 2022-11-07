import { ExportOf } from '@/lib/hooks/use-list-view.hook'
import { FarmListRowInterface } from '../interfaces'

export const farmExportColumns: ExportOf<FarmListRowInterface> = [
  'household',
  'name',
  'ownerName',
  'ownershipType',
  'sizeInHaTotal',
]
