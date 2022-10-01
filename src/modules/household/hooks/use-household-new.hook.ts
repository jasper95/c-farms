import { useCreateHouseholdMutation } from '@/modules/household/api/mutations'
import { useForm, useWatch } from 'react-hook-form'
import {
  FARM_PROFILE_SCHEMA,
  OTHER_DETAILS_SCHEMA,
  PERSONAL_INFORMATION_SCHEMA,
} from '@/modules/household/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useRef, useState } from 'react'
import { useNotificationStore } from '@/shared/stores/notification'

export function useHouseholdNew() {
  const [activeStep, setActiveStep] = useState(0)
  const [newHouseholdResponse, onCreate] = useCreateHouseholdMutation()
  const { notifySuccess } = useNotificationStore()
  const personalInformationFormProps = useForm({
    defaultValues: PERSONAL_INFORMATION_SCHEMA.cast({}),
    resolver: yupResolver(PERSONAL_INFORMATION_SCHEMA, { abortEarly: false }),
  })
  const otherDetailsFormProps = useForm({
    defaultValues: OTHER_DETAILS_SCHEMA.cast({}),
    resolver: yupResolver(OTHER_DETAILS_SCHEMA, { abortEarly: false }),
  })
  const farmProfileFormProps = useForm({
    defaultValues: FARM_PROFILE_SCHEMA.cast({}),
    resolver: yupResolver(FARM_PROFILE_SCHEMA, { abortEarly: false }),
  })
  const { getValues: personalInformationGetValues } =
    personalInformationFormProps
  const { setValue: otherDetailsFormSetValue } = otherDetailsFormProps
  const isHouseholdHead = useWatch({
    control: otherDetailsFormProps.control,
    name: 'isHouseholdHead',
  })

  const topRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    topRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [activeStep])

  useEffect(() => {
    otherDetailsFormSetValue(
      'nameOfHouseholdHead',
      isHouseholdHead
        ? personalInformationGetValues(['firstName', 'lastName']).join(' ')
        : ''
    )
  }, [otherDetailsFormSetValue, isHouseholdHead, personalInformationGetValues])

  return {
    onCreate,
    personalInformationFormProps,
    otherDetailsFormProps,
    farmProfileFormProps,
    activeStep,
    topRef,
    onBack,
    validateAndNext,
    isLoading: newHouseholdResponse.fetching,
  }

  function onBack() {
    setActiveStep((prev) => prev - 1)
  }

  function onNext() {
    setActiveStep((prev) => prev + 1)
  }

  async function onSave() {
    const household = {
      ...personalInformationFormProps.getValues(),
      ...otherDetailsFormProps.getValues(),
    }
    const annualInfo = {
      ...farmProfileFormProps.getValues(),
      year: new Date().getFullYear(),
    }
    const response = await onCreate({
      object: {
        ...household,
        annualInfos: {
          data: [
            {
              ...annualInfo,
              farmworkerActivityType: JSON.stringify(
                annualInfo.farmworkerActivityType
              ),
              fisherActivityType: JSON.stringify(annualInfo.fisherActivityType),
              mainLivelihood: JSON.stringify(annualInfo.mainLivelihood),
            },
          ],
        },
      },
    })
    notifySuccess('Household sucessfully created')
  }

  function validateAndNext() {
    switch (activeStep) {
      case 0: {
        personalInformationFormProps.handleSubmit(onNext)()
        break
      }
      case 1: {
        otherDetailsFormProps.handleSubmit(onNext)()
        break
      }
      case 2: {
        farmProfileFormProps.handleSubmit(onSave)()
        break
      }
      default: {
      }
    }
  }
}
