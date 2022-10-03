import { AnnualInfoForm } from '@/modules/household/components/annual-info-form.component'
import { IDialogContentProps, withDialog } from '@/shared/hocs'
import Box from '@mui/material/Box'
import { IAnnualInfoSchema } from '@/modules/annual-info/constants'

type AnnualInfoDialogPayload = IAnnualInfoSchema
type IAnnualInfoDialogProps = IDialogContentProps<AnnualInfoDialogPayload>
function AnnualInfoDialogBody(props: IAnnualInfoDialogProps) {
  console.log('props', props.formProps.formState.errors)
  return (
    <Box>
      <AnnualInfoForm formProps={props.formProps} />
    </Box>
  )
}

export const AnnualInfoDialog = withDialog(AnnualInfoDialogBody)
export default AnnualInfoDialog
