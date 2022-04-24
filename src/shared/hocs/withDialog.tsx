import DialogLayout, {
  DialogLayoutProps,
} from '@/components/dialog/dialog-layout'
import { useDialogStore } from '@/shared/stores/dialog'
import {
  useForm,
  UseFormProps,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import type Lazy from 'yup/lib/Lazy'

import React from 'react'
import pick from 'lodash/pick'

export type IDialogForm<T> = {
  defaultValues: UseFormProps<T>['defaultValues']
  validationSchema?: Yup.AnyObjectSchema | Lazy<any>
  onCancel?(): void
  onContinue?(): void
  onValid: SubmitHandler<T>
}
export type IWithDialogProps<T> = Omit<
  DialogLayoutProps,
  'onCancel' | 'onContinue' | 'children'
> &
  IDialogForm<T>

export type IDialogContentProps<T> = {
  formProps: UseFormReturn<T>
}

function withDialog<T>(WrappedComponent: React.FC<IDialogContentProps<T>>) {
  const Dialog: React.FC<IWithDialogProps<T>> = (props) => {
    const { hideDialog } = useDialogStore()
    const { title, onContinue, onCancel, defaultValues, validationSchema } =
      props
    const formProps = useForm<T>({
      defaultValues,
      ...(validationSchema && {
        resolver: yupResolver(validationSchema),
      }),
    })
    return (
      <DialogLayout
        {...pick(props, 'isProcessing')}
        title={title}
        onCancel={onClickCancel ?? onCancel}
        onContinue={onContinue ?? onClickContinue}
      >
        <WrappedComponent formProps={formProps} />
      </DialogLayout>
    )

    function onClickCancel() {
      hideDialog()
    }

    function onClickContinue() {
      formProps.handleSubmit((data) => {
        props.onValid?.(data)
      })
    }
  }
  return Dialog
}

export default withDialog
