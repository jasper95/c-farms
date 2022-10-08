import { UseEditHouseholdDetailsProps } from '@/modules/household/hooks'
import { PersonalInformationForm } from '@/modules/household/components'
import Box from '@mui/material/Box'
import { FormToolbar } from '@/components/form-toolbar'
import { personalInfomationSchema } from '@/modules/household/constants'
import { useEditViewHook } from '@/lib/hooks/use-edit-view.hook'
import { useHouseholdDetailsQuery } from '../api/queries'
import { useUpdateHouseholdMutation } from '../api/mutations'

export function EditHouseholdDetails() {
  const { formProps, onSave, isMutating } = useEditViewHook({
    useDetailsQueryHook: useHouseholdDetailsQuery,
    useMutationHook: useUpdateHouseholdMutation,
    name: 'Household',
    schema: personalInfomationSchema,
  })

  return (
    <Box>
      <PersonalInformationForm formProps={formProps} />
      <FormToolbar
        confirmDisabled={!formProps.formState.isDirty}
        cancelVisible={false}
        onConfirm={onSave}
        isLoading={isMutating}
      />
    </Box>
  )
}
