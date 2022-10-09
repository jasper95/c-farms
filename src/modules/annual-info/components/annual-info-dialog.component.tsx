import { AnnualInfoForm } from '@/modules/household/components/annual-info-form.component'
import { withDialog, withEditDialog } from '@/lib/hocs'

export const AnnualInfoAddDialog = withDialog(AnnualInfoForm)
export const AnnualInfoEditDialog = withEditDialog(AnnualInfoForm)
