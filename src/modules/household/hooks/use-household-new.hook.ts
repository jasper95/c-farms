import { useCreateHouseholdMutation } from '@/modules/household/api/mutations'
import { useForm, useWatch } from 'react-hook-form'
import {
  otherDetailsSchema,
  personalInfomationSchema,
} from '@/modules/household/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useRef, useState } from 'react'
import { useNotificationStore } from '@/shared/stores/notification'
import { useRouter } from 'next/router'
import { annualInfoSchema } from '@/modules/annual-info/constants'

export function useHouseholdNew() {
  const [activeStep, setActiveStep] = useState(0)
  const [createMutationState, onCreate] = useCreateHouseholdMutation()
  const { notifySuccess } = useNotificationStore()
  const router = useRouter()
  const personalInformationFormProps = useForm({
    defaultValues: personalInfomationSchema.cast({}),
    resolver: yupResolver(personalInfomationSchema, { abortEarly: false }),
  })
  const otherDetailsFormProps = useForm({
    defaultValues: otherDetailsSchema.cast({}),
    resolver: yupResolver(otherDetailsSchema, { abortEarly: false }),
  })
  const annualInfoFormProps = useForm({
    defaultValues: annualInfoSchema.cast({}),
    resolver: yupResolver(annualInfoSchema, { abortEarly: false }),
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
    annualInfoFormProps,
    activeStep,
    topRef,
    onBack,
    validateAndNext,
    isLoading: createMutationState.fetching,
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
      ...annualInfoFormProps.getValues(),
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
    router.push(`/household/${response.data?.data?.id}`)
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
        annualInfoFormProps.handleSubmit(onSave)()
        break
      }
      default: {
      }
    }
  }
}
