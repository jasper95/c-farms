import DialogLayout, {
  DialogLayoutProps,
} from '@/components/dialog/dialog-layout'
import { useDialogStore } from '@/lib/stores/dialog'

import { yupResolver } from '@hookform/resolvers/yup'

import React from 'react'
import pick from 'lodash/pick'
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form'
import ObjectSchema from 'yup/lib/object'

export type IDialogForm<T extends FieldValues> = {
  defaultValues: UseFormProps<T>['defaultValues']
  validationSchema?: ObjectSchema<T>
  onCancel?(): void
  onContinue?(): void
  onValid: SubmitHandler<T>
  hideOnValid?: boolean
}
export type IWithDialogProps<T extends FieldValues> = Omit<
  DialogLayoutProps,
  'onCancel' | 'onContinue' | 'children'
> &
  IDialogForm<T>

export type IDialogContentProps<T extends FieldValues> = {
  formProps: UseFormReturn<T>
}

export function withDialog<T extends FieldValues>(
  WrappedComponent: React.FC<IDialogContentProps<T>>
) {
  const Dialog: React.FC<IWithDialogProps<T>> = (props) => {
    const { hideDialog, toggleDialogLoading } = useDialogStore()
    const {
      title,
      onContinue,
      onCancel,
      defaultValues,
      validationSchema,
      hideOnValid = true,
    } = props
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
        onCancel={onClickCancel}
        onContinue={onContinue ?? onClickContinue}
      >
        <WrappedComponent formProps={formProps} />
      </DialogLayout>
    )

    function onClickCancel() {
      onCancel?.()
      hideDialog()
    }

    function onClickContinue() {
      formProps.handleSubmit(async (data) => {
        if (props.onValid) {
          toggleDialogLoading()
          await props.onValid(data)
          toggleDialogLoading()
        }
        if (hideOnValid) {
          hideDialog()
        }
      })()
    }
  }
  return Dialog
}
