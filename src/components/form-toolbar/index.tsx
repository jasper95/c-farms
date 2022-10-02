import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'
import { grey } from '@mui/material/colors'

const PREFIX = 'index'

const classes = {
  toolbar: `${PREFIX}-toolbar`,
}

const StyledToolbar = styled(Toolbar)(() => ({
  [`& .${classes.toolbar}`]: {
    backgroundColor: grey[100],
  },
}))

export interface FormToolbarProps {
  onCancel?: () => void
  onConfirm(): void
  cancelDisabled?: boolean
  cancelVisible?: boolean
  confirmDisabled?: boolean
  confirmVisible?: boolean
  cancelLabel?: string
  confirmLabel?: string
  loading?: boolean
}

export function FormToolbar(props: FormToolbarProps) {
  const {
    onCancel,
    cancelDisabled = false,
    cancelVisible = true,
    onConfirm,
    confirmDisabled = false,
    confirmVisible,
    cancelLabel = 'Cancel',
    confirmLabel = 'Save',
    loading,
  } = props
  return (
    <StyledToolbar
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
        <LoadingButton
          disabled={confirmDisabled}
          variant="contained"
          color="primary"
          onClick={onConfirm}
          loading={loading}
        >
          {confirmLabel}
        </LoadingButton>
      </div>
    </StyledToolbar>
  )
}
