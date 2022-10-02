import { useForm } from 'react-hook-form'
import { PERSONAL_INFORMATION_SCHEMA } from '@/modules/household/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useNotificationStore } from '@/shared/stores/notification'
import { useHouseholdDetailsQuery } from '@/modules/household/api/queries'
import { useRouter } from 'next/router'
import { useUpdateHouseholdMutation } from '../api/mutations'

export function useHouseholdDetails() {
  const { notifySuccess } = useNotificationStore()
  const router = useRouter()
  const [detailsResponse] = useHouseholdDetailsQuery({
    variables: {
      id: router.query.id,
    },
  })
  const [updateHouseholdResponse, onUpdate] = useUpdateHouseholdMutation()
  const personalInformationFormProps = useForm({
    resolver: yupResolver(PERSONAL_INFORMATION_SCHEMA, { abortEarly: false }),
  })
  const { reset } = personalInformationFormProps
  useEffect(() => {
    if (detailsResponse.data?.householdByPk) {
      reset(
        PERSONAL_INFORMATION_SCHEMA.noUnknown().cast(
          detailsResponse.data?.householdByPk
        )
      )
    }
  }, [detailsResponse.data, reset])

  async function onSave() {
    await onUpdate({
      object: personalInformationFormProps.getValues(),
      id: {
        id: router.query.id,
      },
    })
    notifySuccess('Household successfully updated')
  }

  function onSubmit() {
    personalInformationFormProps.handleSubmit(onSave)()
  }

  return {
    personalInformationFormProps,
    isUpdating: updateHouseholdResponse.fetching,
    onSubmit,
  }
}
