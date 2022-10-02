import { useHouseholdDetails } from '@/modules/household/hooks'
import { PersonalInformation } from '@/modules/household/components'
import Box from '@mui/material/Box'
import { FormToolbar } from '@/components/form-toolbar'

export function HouseholdDetails() {
  const { personalInformationFormProps, onSubmit, isUpdating } =
    useHouseholdDetails()
  return (
    <Box>
      <PersonalInformation formProps={personalInformationFormProps} />
      <FormToolbar
        confirmDisabled={!personalInformationFormProps.formState.isDirty}
        cancelVisible={false}
        onConfirm={onSubmit}
        loading={isUpdating}
      />
    </Box>
  )
}
