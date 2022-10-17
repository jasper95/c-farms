import React from 'react'
import DefaultTitle, { DialogTitleProps } from './dialog-title'
import DefaultActions, { DialogActionsProps } from './dialog-actions'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import pick from 'lodash/pick'
import DialogContent from '@mui/material/DialogContent'
import Box from '@mui/material/Box'

export type DialogLayoutProps = DialogTitleProps &
  DialogActionsProps &
  Pick<DialogProps, 'maxWidth'> & {
    titleRenderer?: React.FunctionComponent<DialogTitleProps>
    actionsRenderer?: React.FunctionComponent<DialogActionsProps>
    children: React.ReactNode
  }

export default function DialogLayout(props: DialogLayoutProps) {
  const {
    titleRenderer: DialogTitle = DefaultTitle,
    onCancel,
    actionsRenderer: DialogActions = DefaultActions,
    children,
    maxWidth,
  } = props
  return (
    <Dialog fullWidth maxWidth={maxWidth} open onClose={onCancel}>
      <DialogTitle {...pick(props, ['onCancel', 'title'])} />
      <DialogContent>
        <Box sx={{ py: 3 }}>{children}</Box>
      </DialogContent>
      <DialogActions
        {...pick(props, [
          'onContinue',
          'onCancel',
          'isProcessing',
          'continueLabel',
          'cancelLabel',
        ])}
      />
    </Dialog>
  )
}
