import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { IOtherDetailsSchema } from '@/modules/household/constants'
import { UseFormReturn, useWatch } from 'react-hook-form'
import TextField from '@/components/text-field'
import SwitchField from '@/components/switch-field'

interface IOtherDetailsFormProps {
  formProps: UseFormReturn<IOtherDetailsSchema>
  formDisabled?: boolean
}

export function OtherDetailsForm(props: IOtherDetailsFormProps) {
  const { formProps, formDisabled } = props
  const { control } = formProps
  const isHouseholdHead = useWatch({ control, name: 'isHouseholdHead' })
  return (
    <Grid container spacing={2}>
      <Grid item md={12} xs={12}>
        <SwitchField
          control={control}
          name="isHouseholdHead"
          label="Household head"
          disabled={formDisabled}
        />
      </Grid>
      {!isHouseholdHead && (
        <>
          <Grid item md={12}>
            <Typography variant="subtitle1">
              <b>If not a household head,</b>
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              control={control}
              label="Name of household head"
              name="nameOfHouseholdHead"
              disabled={formDisabled}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              control={control}
              name="relationshipToHouseholdHead"
              label="Relationship"
              disabled={formDisabled}
            />
          </Grid>
        </>
      )}
      <Grid item md={12}>
        <Typography variant="subtitle1">
          <b>No of living household members:</b>
        </Typography>
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          name="maleCount"
          label="Male"
          type="number"
          disabled={formDisabled}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          name="femaleCount"
          label="Female"
          type="number"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item md={4}>
        <TextField
          control={control}
          name="ipMembership"
          label="IP Membership"
          disabled={formDisabled}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          name="governmentIdType"
          label="Government ID type"
          disabled={formDisabled}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          name="governmentIdNo"
          label="Government ID No."
          type="text"
          disabled={formDisabled}
        />
      </Grid>
      <Grid item md={4}>
        <SwitchField
          control={control}
          name="personWithDisability"
          label="Person with disability"
          disabled={formDisabled}
        />
      </Grid>
      <Grid item md={4}>
        <SwitchField
          control={control}
          name="is4psBeneficiary"
          label="4P's benificiary"
          disabled={formDisabled}
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          name="emergencyContactName"
          label="Emergency Contact Name"
          disabled={formDisabled}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          placeholder="09xxxxxxxxx"
          label="Emergency Contact No."
          name="emergencyContactNumber"
          disabled={formDisabled}
        />
      </Grid>
    </Grid>
  )
}
