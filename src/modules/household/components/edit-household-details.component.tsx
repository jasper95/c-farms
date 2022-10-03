import {
  useEditHouseholdDetails,
  UseEditHouseholdDetailsProps,
} from '@/modules/household/hooks'
import { PersonalInformation } from '@/modules/household/components'
import Box from '@mui/material/Box'
import { FormToolbar } from '@/components/form-toolbar'
import { PERSONAL_INFORMATION_SCHEMA } from '@/modules/household/constants'

type EditHouseholdDetailsProps = Omit<UseEditHouseholdDetailsProps, 'schema'>
export function EditHouseholdDetails(props: EditHouseholdDetailsProps) {
  const { formProps, onSubmit, isUpdating } = useEditHouseholdDetails({
    ...props,
    schema: PERSONAL_INFORMATION_SCHEMA,
  })

  return (
    <Box>
      <PersonalInformation formProps={formProps} />
      <FormToolbar
        confirmDisabled={!formProps.formState.isDirty}
        cancelVisible={false}
        onConfirm={onSubmit}
        loading={isUpdating}
      />
    </Box>
  )
}
