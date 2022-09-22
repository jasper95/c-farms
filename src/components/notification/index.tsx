import Snackbar from '@mui/material/Snackbar'
import Slide from '@mui/material/Slide'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
// import { TransitionProps } from '@mui/material/transitions/transition'
import { Notification as INotification } from '@/shared/stores/notification'

export type NotificationProps = {
  notification: INotification
  onDismiss: (id: string) => void
}

function SlideTransition(props: any) {
  return <Slide {...props} direction="right" />
}

export default function Notification(props: NotificationProps) {
  const { notification, onDismiss } = props
  return (
    <Snackbar
      TransitionComponent={SlideTransition}
      open
      autoHideDuration={6000}
      onClose={() => onDismiss(notification.id)}
    >
      <MuiAlert
        onClose={() => onDismiss(notification.id)}
        severity={notification.type}
      >
        {notification.message}
      </MuiAlert>
    </Snackbar>
  )
}
