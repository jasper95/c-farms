import React from 'react'
import { styled } from '@mui/material/styles'
import MuiDialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
const PREFIX = 'dialog-title'

const classes = {
  closeButton: `${PREFIX}-closeButton`,
}

const StyledMuiDialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  [`& .${classes.closeButton}`]: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}))

export type DialogTitleProps = {
  onCancel(): void
  title: React.ReactNode
}

export default function DialogTitle(props: DialogTitleProps) {
  const { onCancel, title } = props

  return (
    <StyledMuiDialogTitle>
      <Typography variant="h6">{title}</Typography>
      {onCancel ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onCancel}
          size="large"
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </StyledMuiDialogTitle>
  )
}
