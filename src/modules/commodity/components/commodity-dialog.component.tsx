import CommodityForm from '@/modules/commodity/components/commodity-form.component'
import { IDialogContentProps, withDialog } from '@/lib/hocs'
import Box from '@mui/material/Box'
import { ICommoditySchema } from '@/modules/commodity/constants'

type CommodityDialogPayload = ICommoditySchema
type ICommodityDialogProps = IDialogContentProps<CommodityDialogPayload>
function CommodityDialogBody(props: ICommodityDialogProps) {
  return (
    <Box sx={{ py: 3 }}>
      <CommodityForm formProps={props.formProps} />
    </Box>
  )
}

export const CommodityDialog = withDialog(CommodityDialogBody)
export default CommodityDialog
