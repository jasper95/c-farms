import { useHouseholdOptionsQuery } from '@/modules/farm/api/queries'
import { useMemo } from 'react'
import { IFarmSchema } from '../constants'
import { UseFormReturn, useWatch } from 'react-hook-form'
import { useEffect } from 'react'
import { OrderBy } from '@/lib/generated/graphql.types'

interface FarmFormProps {
  formProps: UseFormReturn<IFarmSchema>
  onSave: () => void
  isMutating: boolean
  formDisabled?: boolean
}

export function useFarmFormHook(props: FarmFormProps) {
  const currentYear = new Date().getFullYear()

  const [householdListOptionsResponse] = useHouseholdOptionsQuery({
    variables: {
      where: {
        annualInfos: {
          mainLivelihood: { _contains: 'Farmer' },
          year: { _eq: currentYear },
        },
      },
      orderBy: { lastName: OrderBy.Asc },
    },
  })

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

  const householdOptions = useMemo(() => {
    return (
      householdListOptionsResponse.data?.list.map((household) => ({
        label: [household.firstName, household.lastName].join(' '),
        value: household.id,
      })) ?? []
    )
  }, [householdListOptionsResponse.data])

  const householdName = householdOptions.find(
    (option) => option.value === farmGetValues('householdId')
  )?.label

  useEffect(() => {
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
  }
}
