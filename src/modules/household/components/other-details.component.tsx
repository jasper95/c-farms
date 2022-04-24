import RadioSelect from '@/components/radio-select'
import SelectField from '@/components/select-field'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {
  BOOLEAN_OPTION,
  EDUCATION_BACKGROUND_OPTIONS,
  IOtherDetailsSchema,
} from '@/modules/household/constants'
import { UseFormReturn } from 'react-hook-form'
import TextField from '@/components/text-field'

interface IOtherDetailsProps {
  formProps: UseFormReturn<IOtherDetailsSchema>
}

export function OtherDetails(props: IOtherDetailsProps) {
  const { formProps } = props
  const { control } = formProps
  return (
    <Grid container spacing={4}>
      <Grid item md={12} xs={12}>
        <RadioSelect
          control={control}
          name="hh_head"
          options={BOOLEAN_OPTION}
          label="Household head"
        />
      </Grid>
      <Grid item md={12}>
        <Typography variant="subtitle1">
          <b>If not a household head,</b>
        </Typography>
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          label="Name of household head"
          name="hh_head"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          name="relationship_head"
          label="Relationship"
        />
      </Grid>
      <Grid item md={12}>
        <Typography variant="subtitle1">
          <b>No of living household members:</b>
        </Typography>
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          name="member_male"
          label="Male"
          type="number"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          name="member_female"
          label="Female"
          type="number"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item md={4}>
        <SelectField
          control={control}
          options={EDUCATION_BACKGROUND_OPTIONS}
          label="Highest formal Education"
          name="highest_education"
        />
      </Grid>
      <Grid item md={4}>
        <RadioSelect
          control={control}
          name="is_pwd"
          options={BOOLEAN_OPTION}
          label="Person with disability"
        />
      </Grid>
      <Grid item md={4}>
        <RadioSelect
          control={control}
          name="is_4ps"
          options={BOOLEAN_OPTION}
          label="4P's benificiary"
        />
      </Grid>
      <Grid item md={4}>
        <TextField
          control={control}
          name="ip_membership"
          label="IP Membership"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          name="gov_id_type"
          label="Government ID type"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          name="gov_id_no"
          label="Government ID No."
          type="text"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          label="Association membership"
          type="text"
          name="assoc_id"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          name="emergency_contact_person"
          label="Emergency Contact Name"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          label="Emergency Contact No."
          name="emergency_contact_no"
        />
      </Grid>
    </Grid>
  )
}
