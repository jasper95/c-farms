import { useHouseholdOptionsQuery } from '@/modules/farm/api/queries'
import { useMemo } from 'react'
import { farmSchema, IFarmSchema } from '../constants'
import { useForm, UseFormReturn, useWatch } from 'react-hook-form'
import { useEffect } from 'react'
import { ownerDocument } from '@mui/material'
import { find } from 'lodash'

interface FarmFormProps {
  formProps: UseFormReturn<IFarmSchema>
  onSave: () => void
  isMutating: boolean
}

export function useFarmFormHook(props: FarmFormProps) {
  const [householdListOptionsResponse] = useHouseholdOptionsQuery()

  const farmFormProps = props.formProps

  const { getValues: farmGetValues } = farmFormProps
  const { setValue: farmSetValue } = farmFormProps

  const owner = useWatch({
    control: farmFormProps.control,
    name: 'ownerName',
  })

  const household = useWatch({
    control: farmFormProps.control,
    name: 'householdId',
  })

  const ownershipType = useWatch({
    control: farmFormProps.control,
    name: 'ownershipType',
  })

  console.log('household ' + owner)

  const householdOptions = useMemo(() => {
    return (
      householdListOptionsResponse.data?.list.map((household) => ({
        label: [household.firstName, household.lastName].join(' '),
        value: household.id,
      })) ?? []
    )
  }, [householdListOptionsResponse.data])

  const householdName = find(householdOptions, {
    value: farmGetValues('householdId'),
  })?.label

  useEffect(() => {
    console.log('Ownership Type ' + ownershipType)
    ownershipType === 'Registered Owner'
      ? farmSetValue('ownerName', householdName ?? '')
      : farmSetValue('ownerName', '')
  }, [
    ownershipType,
    farmSetValue,
    farmGetValues,
    householdOptions,
    householdName,
  ])

  return {
    householdOptions,
    farmFormProps,
  }
}
