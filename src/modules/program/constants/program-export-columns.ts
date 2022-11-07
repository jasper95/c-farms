import { ExportOf } from '@/lib/hooks/use-list-view.hook'
import { ProgramListRow } from './program-list-columns'

export const programExportColumns: ExportOf<ProgramListRow> = [
  'name',
  'type',
  'sponsoringAgency',
  'dateStart',
  'dateEnd',
]
