import { ExportOf } from '@/lib/hooks/use-list-view.hook'
import { AssociationBeneficiariesListRow } from '../interfaces/associations-list-row'

export const associationBeneficiariesExportColumns: ExportOf<AssociationBeneficiariesListRow> =
  ['name', 'createdAt']
