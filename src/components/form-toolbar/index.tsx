import { makeStyles } from '@material-ui/styles'
import grey from '@material-ui/core/colors/grey'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: grey[100],
  },
}))

export interface FormToolbarProps {
  onCancel(): void
  onConfirm(): void
  cancelDisabled?: boolean
  cancelVisible?: boolean
  confirmDisabled?: boolean
  confirmVisible?: boolean
  cancelLabel?: string
  confirmLabel?: string
}

export function FormToolbar(props: FormToolbarProps) {
  const classes = useStyles()
  const {
    onCancel,
    cancelDisabled = false,
    cancelVisible = true,
    onConfirm,
    confirmDisabled = false,
    confirmVisible,
    cancelLabel = 'Cancel',
    confirmLabel = 'Save',
  } = props
  return (
    <Toolbar
      className={`${classes.toolbar} grid grid-cols-2 justify-items-stretch`}
    >
      <div className="justify-self-start">
        {cancelVisible && (
          <Button variant="contained" color="primary" onClick={onCancel}>
            {cancelLabel}
          </Button>
        )}
      </div>
      <div className="justify-self-end">
        <Button
          disabled={confirmDisabled}
          variant="contained"
          color="primary"
          onClick={onConfirm}
        >
          {confirmLabel}
        </Button>
      </div>
    </Toolbar>
  )
}
