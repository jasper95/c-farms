import Grid from '@mui/material/Grid'
import TextField from '@/components/text-field'
import Divider from '@mui/material/Divider'
import {
  CIVIL_STATUS_OPTIONS,
  GENDER_OPTIONS,
  IPersonalInformationSchema,
  BARANGAY_OPTIONS,
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
        <TextField control={control} name="lastName" label="Surname" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} name="firstName" label="Firstname" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} name="middleName" label="Middlename" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          control={control}
          label="Extension Name"
          name="extensionName"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} label="House/Lot/Bldg No" name="houseNo" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField control={control} label="Street/Sitio/Subdv" name="street" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SelectField
          control={control}
          label="Barangay"
          name="barangay"
          options={BARANGAY_OPTIONS}
        />
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
        <TextField control={control} label="Contact No." name="contactNumber" />
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
          name="mothersMaidenName"
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
        <DatePicker
          control={control}
          name="dateOfBirth"
          label="Date of birth"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          control={control}
          label="Place of birth"
          name="placeOfBirth"
        />
      </Grid>
    </Grid>
  )
}
