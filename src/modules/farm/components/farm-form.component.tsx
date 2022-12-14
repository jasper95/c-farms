import Grid from '@mui/material/Grid'
import { UseFormReturn } from 'react-hook-form'
import TextField from '@/components/text-field'
import {
  farmTypeOptions,
  IFarmSchema,
  ownershipDocumentOptions,
  ownershipTypeOptions,
} from '@/modules/farm/constants'
import SelectField from '@/components/select-field'
import { barangayOptions } from '@/modules/household/constants'
import SwitchField from '@/components/switch-field'
import { FormToolbar } from '@/components/form-toolbar'
import MapField from '@/components/map-field'
import { useFarmFormHook } from '@/modules/farm/hooks'
import Button from '@mui/material/Button'

interface FarmFormProps {
  formProps: UseFormReturn<IFarmSchema>
  onSave: () => void
  isMutating: boolean
  formDisabled?: boolean
}

export function FarmForm(props: FarmFormProps) {
  const { formProps, formDisabled, isMutating, onSave } = props
  const { householdOptions, householdId, householdName } =
    useFarmFormHook(props)
  const { control } = formProps

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <MapField
          enabled={!formDisabled}
          label=""
          control={control}
          name="location"
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <TextField
              disabled={formDisabled}
              label="Name"
              control={control}
              name="name"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <SelectField
              disabled={formDisabled}
              label="Ownership Type"
              control={control}
              options={ownershipTypeOptions}
              name="ownershipType"
            />
          </Grid>
          <Grid item sm={12} md={12}>
            <SelectField
              disabled={formDisabled}
              label="Household"
              control={control}
              options={householdOptions}
              name="householdId"
            />
          </Grid>

          <Grid item sm={12} md={6}>
            <TextField
              disabled={formDisabled}
              label="Owner"
              control={control}
              name="ownerName"
            />
          </Grid>

          <Grid item sm={12} md={6}>
            <SelectField
              disabled={formDisabled}
              label="Ownership Document"
              control={control}
              options={ownershipDocumentOptions}
              name="ownershipDocument"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <SelectField
              disabled={formDisabled}
              label="Type"
              control={control}
              options={farmTypeOptions}
              name="farmType"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              disabled={formDisabled}
              label="Size in ha"
              control={control}
              name="sizeInHaTotal"
              type={'number'}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <SelectField
              disabled={formDisabled}
              label="Barangay"
              control={control}
              options={barangayOptions}
              name="barangay"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              disabled={formDisabled}
              label="Municipality"
              control={control}
              name="municipality"
            />
          </Grid>
          <Grid item sm={6}>
            <SwitchField
              disabled={formDisabled}
              control={control}
              name="isAgrarianReformBeneficiary"
              label="Agrarian Reform Beneficiary"
            />
          </Grid>
          <Grid item sm={6}>
            <SwitchField
              disabled={formDisabled}
              control={control}
              name="withinAncestralDomain"
              label="Within Ancestral Domain"
            />
          </Grid>
        </Grid>
        {householdId && (
          <Grid item sm={12} md={12}>
            <Button
              className=".MuiButton-fullWidth	"
              href={`/household/${householdId}`}
            >
              Visit {householdName}&apos;s Household Profile
            </Button>
          </Grid>
        )}
        <FormToolbar
          cancelVisible={false}
          confirmVisible={false}
          confirmDisabled={formDisabled}
          onConfirm={onSave}
          confirmLabel="Save"
          isLoading={isMutating}
        />
      </Grid>
    </Grid>
  )
}
