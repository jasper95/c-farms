import { useCreateHouseholdMutation } from '@/modules/household/api/mutations'
import { useForm } from 'react-hook-form'
import {
  FARM_PROFILE_SCHEMA,
  OTHER_DETAILS_SCHEMA,
  PERSONAL_INFORMATION_SCHEMA,
} from '@/modules/household/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useRef, useState } from 'react'

export function useHouseholdNew() {
  const [activeStep, setActiveStep] = useState(0)
  const [newHouseholdResponse, onCreate] = useCreateHouseholdMutation()
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
  const topRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    topRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [activeStep])

  return {
    onCreate,
    personalInformationFormProps,
    otherDetailsFormProps,
    farmProfileFormProps,
    activeStep,
    topRef,
    onBack,
    validateAndNext,
  }

  function onBack() {
    setActiveStep((prev) => prev - 1)
  }

  function onNext() {
    setActiveStep((prev) => prev + 1)
  }

  async function onSave() {
    // const data = {
    //   ...personalInformationFormProps.getValues(),
    //   ...otherDetailsFormProps.getValues(),
    // }
    // console.log('data: ', data)
    // console.log('adfadsf', farmProfileFormProps.getValues())
    // onCreate({
    //   object: {},
    // })
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
