import Grid from '@material-ui/core/Grid'
import TextField from '@/components/text-field'
import Divider from '@material-ui/core/Divider'
import { KeyboardDatePicker } from '@material-ui/pickers/DatePicker'
import {
  CIVIL_STATUS_OPTIONS,
  GENDER_OPTIONS,
  IPersonalInformationSchema,
} from '@/modules/household/constants'
import RadioSelect from '@/components/radio-select'
import SelectField from '@/components/select-field'
import DatePicker from '@/components/date-picker'
import { UseFormReturn } from 'react-hook-form/dist/types'

interface IPersonalInformation {
  formProps: UseFormReturn<IPersonalInformationSchema>
}
export function PersonalInformation(props: IPersonalInformation) {
  const { formProps } = props
  const { control, formState } = formProps
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} name="lname" label="Surname" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} name="fname" label="Firstname" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} name="mname" label="Middlename" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} label="Extension Name" name="extname" />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          control={control}
          label="House/Lot/Bldg No"
          name="house_no"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} label="Street/Sitio/Subdv" name="street" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} label="Barangay" name="barangay" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} label="Municipality" name="municipality" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} label="Province" name="province" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} label="Region" name="region" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} label="Contact No." name="contact_no" />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <RadioSelect
          name="sex"
          control={control}
          options={GENDER_OPTIONS}
          label="Gender"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SelectField
          control={control}
          name="civil_status"
          label="Civil Status"
          options={CIVIL_STATUS_OPTIONS}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <TextField
          control={control}
          label="Name of Spouse"
          name="spouse"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          control={control}
          label="Mother's Maiden Name"
          name="mothers_maiden"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          control={control}
          fullWidth
          label="Religion"
          name="religion"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <DatePicker control={control} name="dob" label="Date of birth" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} label="Place of birth" name="pob" />
      </Grid>
    </Grid>
  )
}
