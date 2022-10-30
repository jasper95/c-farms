import { withDialog, IFormContentProps } from '@/lib/hocs'
import Typography from '@mui/material/Typography'
import { useWatch } from 'react-hook-form'

type IConfirmPaylaod = {
  message: string
}
type IConfirmDialogProps = IFormContentProps<IConfirmPaylaod>

export function ConfirmDialog(props: IConfirmDialogProps) {
  const { formProps } = props
  const message = useWatch({ name: 'message', control: formProps.control })
  return <Typography variant="body1">{message}</Typography>
}
