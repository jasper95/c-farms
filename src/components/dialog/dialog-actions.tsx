import React from 'react'
import MuiDialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
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
      <Button
        disabled={isProcessing}
        onClick={onContinue}
        color="primary"
        autoFocus
      >
        {isProcessing && (
          <Box pr={1} display="flex" alignItems="center">
            <CircularProgress size={25} />
          </Box>
        )}
        {continueLabel}
      </Button>
    </MuiDialogActions>
  )
}
