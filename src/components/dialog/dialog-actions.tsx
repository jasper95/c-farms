import React from 'react'
import MuiDialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export type DialogActionsProps = {
  onContinue(): void
  onCancel(): void
  isProcessing?: boolean
  continueLabel?: string
  cancelLabel?: string
}

export default function DialogActions(props: DialogActionsProps) {
  const {
    onCancel,
    onContinue,
    continueLabel = 'Continue',
    cancelLabel = 'Cancel',
    isProcessing,
  } = props
  return (
    <MuiDialogActions>
      <Button onClick={onCancel} color="primary">
        {cancelLabel}
      </Button>
      <LoadingButton
        onClick={onContinue}
        color="primary"
        autoFocus
        loading={isProcessing}
      >
        {continueLabel}
      </LoadingButton>
    </MuiDialogActions>
  )
}
