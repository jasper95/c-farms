import DialogLayout, {
  DialogLayoutProps,
} from '@/components/dialog/dialog-layout'
import { useDialogStore } from '@/shared/stores/dialog'

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
