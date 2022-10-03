import {
  useEditHouseholdDetails,
  UseEditHouseholdDetailsProps,
} from '@/modules/household/hooks'
import { OtherDetailsForm } from '@/modules/household/components'
import Box from '@mui/material/Box'
import { FormToolbar } from '@/components/form-toolbar'
import { otherDetailsSchema } from '@/modules/household/constants'

type EditOtherDetailsProps = Omit<UseEditHouseholdDetailsProps, 'schema'>
export function EditOtherDetails(props: EditOtherDetailsProps) {
  const { formProps, onSubmit, isUpdating } = useEditHouseholdDetails({
    ...props,
    schema: otherDetailsSchema,
  })

  return (
    <Box>
      <OtherDetailsForm formProps={formProps} />
      <FormToolbar
        confirmDisabled={!formProps.formState.isDirty}
        cancelVisible={false}
        onConfirm={onSubmit}
        loading={isUpdating}
      />
    </Box>
  )
}
