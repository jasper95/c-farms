import { ExportOf } from '@/lib/hooks/use-list-view.hook'
import { AssociationListRow } from './association-list-columns'

export const associationExportColumns: ExportOf<AssociationListRow> = [
  'name',
  'active',
]
