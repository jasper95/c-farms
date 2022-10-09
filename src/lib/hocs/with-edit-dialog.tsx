import DialogLayout from '@/components/dialog/dialog-layout'
import { useDialogStore } from '@/lib/stores/dialog'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import pick from 'lodash/pick'
import { FieldValues, useForm } from 'react-hook-form'
import { IFormContentProps, IWithDialogProps } from './with-dialog'
import * as Urql from 'urql'
import {
  BaseDetailsQuery,
  DetailsQueryVariable,
} from '@/lib/hooks/use-edit-view.hook'

export type IWithEditDialogProps<T extends FieldValues, DetailsResponse> = Omit<
  IWithDialogProps<T>,
  'defaultValues'
> & {
  id: string
  transform?: (arg: DetailsResponse) => T
  useDetailsQueryHook(
    options?: Omit<Urql.UseQueryArgs<DetailsQueryVariable>, 'query'>
  ): Urql.UseQueryResponse<BaseDetailsQuery<DetailsResponse>, object>
}
export function withEditDialog<T extends FieldValues, DetailsResponse>(
  WrappedComponent: React.FC<IFormContentProps<T>>
) {
  const Dialog: React.FC<IWithEditDialogProps<T, DetailsResponse>> = (
    props
  ) => {
    const { hideDialog, toggleDialogLoading } = useDialogStore()
    const {
      title,
      onContinue,
      onCancel,
      validationSchema,
      hideOnValid = true,
      useDetailsQueryHook,
      id,
      transform = (a) => a,
    } = props
    const formProps = useForm<T>({
      ...(validationSchema && {
        resolver: yupResolver(validationSchema),
      }),
    })
    const [detailsQueryResponse] = useDetailsQueryHook({
      variables: {
        id,
      },
    })
    const { reset } = formProps
    useEffect(() => {
      if (detailsQueryResponse?.data?.details) {
        reset(transform(detailsQueryResponse?.data?.details) as T)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detailsQueryResponse?.data?.details, reset])

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
