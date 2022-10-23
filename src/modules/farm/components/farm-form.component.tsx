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

interface FarmFormProps {
  formProps: UseFormReturn<IFarmSchema>
  onSave: () => void
  isMutating: boolean
}

export function FarmForm(props: FarmFormProps) {
  const { formProps, isMutating, onSave } = props
  const { householdOptions } = useFarmFormHook(props)
  const { control } = formProps

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <MapField label="" control={control} name="location" />
      </Grid>
      <Grid item sm={12} md={6}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <TextField label="Name" control={control} name="name" />
          </Grid>
          <Grid item sm={12} md={6}>
            <SelectField
              label="Ownership Type"
              control={control}
              options={ownershipTypeOptions}
              name="ownershipType"
            />
          </Grid>
          <Grid item sm={12} md={12}>
            <SelectField
              label="Household"
              control={control}
              options={householdOptions}
              name="householdId"
            />
          </Grid>

          <Grid item sm={12} md={6}>
            <TextField label="Owner" control={control} name="ownerName" />
          </Grid>

          <Grid item sm={12} md={6}>
            <SelectField
              label="Ownership Document"
              control={control}
              options={ownershipDocumentOptions}
              name="ownershipDocument"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <SelectField
              label="Type"
              control={control}
              options={farmTypeOptions}
              name="farmType"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              label="Size in ha"
              control={control}
              name="sizeInHaTotal"
              type={'number'}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <SelectField
              label="Barangay"
              control={control}
              options={barangayOptions}
              name="barangay"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              label="Municipality"
              control={control}
              name="municipality"
            />
          </Grid>
          <Grid item sm={6}>
            <SwitchField
              control={control}
              name="isAgrarianReformBeneficiary"
              label="Agrarian Reform Beneficiary"
            />
          </Grid>
          <Grid item sm={6}>
            <SwitchField
              control={control}
              name="withinAncestralDomain"
              label="Within Ancestral Domain"
            />
          </Grid>
        </Grid>
        <FormToolbar
          cancelVisible={false}
          onConfirm={onSave}
          confirmLabel="Save"
          isLoading={isMutating}
        />
      </Grid>
    </Grid>
  )
}
