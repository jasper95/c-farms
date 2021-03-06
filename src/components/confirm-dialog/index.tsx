import withDialog, { IDialogContentProps } from '@/shared/hocs/withDialog'
import Typography from '@material-ui/core/Typography'
import { useWatch } from 'react-hook-form'

type IConfirmPaylaod = {
  message: string
}
type IConfirmDialogProps = IDialogContentProps<IConfirmPaylaod>

function ConfirmDialog(props: IConfirmDialogProps) {
  const { formProps } = props
  const message = useWatch({ name: 'message', control: formProps.control })
  return <Typography variant="body1">{message}</Typography>
}

export default withDialog(ConfirmDialog)
