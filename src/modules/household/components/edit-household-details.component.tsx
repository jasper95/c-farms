import { PersonalInformationForm } from '@/modules/household/components'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { FormToolbar } from '@/components/form-toolbar'
import { personalInfomationSchema } from '@/modules/household/constants'
import { useEditViewHook } from '@/lib/hooks/use-edit-view.hook'
import { useHouseholdDetailsQuery } from '@/modules/household/api/queries'
import { useUpdateHouseholdMutation } from '@/modules/household/api/mutations'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'

export function EditHouseholdDetails() {
  const { formProps, onSave, isMutating, formDisabled } = useEditViewHook({
    useDetailsQueryHook: useHouseholdDetailsQuery,
    useMutationHook: useUpdateHouseholdMutation,
    name: ResourceEnum.Household,
    schema: personalInfomationSchema,
  })

  return (
    <Card>
      <CardContent>
        <PersonalInformationForm
          formDisabled={formDisabled}
          formProps={formProps}
        />
        <FormToolbar
          confirmDisabled={!formProps.formState.isDirty || formDisabled}
          cancelVisible={false}
          onConfirm={onSave}
          isLoading={isMutating}
        />
      </CardContent>
    </Card>
  )
}
