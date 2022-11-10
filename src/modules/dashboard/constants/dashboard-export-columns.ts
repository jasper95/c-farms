import { ExportOf } from '@/lib/hooks/use-list-view.hook'
import { CropProduceListQuery } from '../api/queries'

export const dashboardExportColumns: ExportOf<CropProduceListQuery['list'][0]> =
  ['name', 'areaUsed', 'produce', 'year', 'yield']
