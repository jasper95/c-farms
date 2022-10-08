import { AnnualInfoForm } from '@/modules/household/components/annual-info-form.component'
import { IDialogContentProps, withDialog } from '@/lib/hocs'
import Box from '@mui/material/Box'
import { IAnnualInfoSchema } from '@/modules/annual-info/constants'

type AnnualInfoDialogPayload = IAnnualInfoSchema
type IAnnualInfoDialogProps = IDialogContentProps<AnnualInfoDialogPayload>
function AnnualInfoDialogBody(props: IAnnualInfoDialogProps) {
  return (
    <Box sx={{ py: 3 }}>
      <AnnualInfoForm formProps={props.formProps} />
    </Box>
  )
}

export const AnnualInfoDialog = withDialog(AnnualInfoDialogBody)
export default AnnualInfoDialog
