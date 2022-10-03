import {
  useEditHouseholdDetails,
  UseEditHouseholdDetailsProps,
} from '@/modules/household/hooks'
import { PersonalInformationForm } from '@/modules/household/components'
import Box from '@mui/material/Box'
import { FormToolbar } from '@/components/form-toolbar'
import { personalInfomationSchema } from '@/modules/household/constants'

type EditHouseholdDetailsProps = Omit<UseEditHouseholdDetailsProps, 'schema'>
export function EditHouseholdDetails(props: EditHouseholdDetailsProps) {
  const { formProps, onSubmit, isUpdating } = useEditHouseholdDetails({
    ...props,
    schema: personalInfomationSchema,
  })

  return (
    <Box>
      <PersonalInformationForm formProps={formProps} />
      <FormToolbar
        confirmDisabled={!formProps.formState.isDirty}
        cancelVisible={false}
        onConfirm={onSubmit}
        loading={isUpdating}
      />
    </Box>
  )
}
