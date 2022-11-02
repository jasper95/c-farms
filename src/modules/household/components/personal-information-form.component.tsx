import Grid from '@mui/material/Grid'
import TextField from '@/components/text-field'
import Divider from '@mui/material/Divider'
import {
  civilStatusOptions,
  genderOptions,
  IPersonalInformationSchema,
  barangayOptions,
} from '@/modules/household/constants'
import RadioSelect from '@/components/radio-select'
import SelectField from '@/components/select-field'
import DatePicker from '@/components/date-picker'
import { UseFormReturn, useWatch } from 'react-hook-form'

interface IPersonalInformationFormProps {
  formDisabled?: boolean
  formProps: UseFormReturn<IPersonalInformationSchema>
}
export function PersonalInformationForm(props: IPersonalInformationFormProps) {
  const { formProps, formDisabled } = props
  const { control } = formProps
  const civilStatus = useWatch({ control, name: 'civilStatus' })
  const sex = useWatch({ control, name: 'sex' })
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          disabled={formDisabled}
          control={control}
          name="referenceNo"
          label="Reference No."
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          disabled={formDisabled}
          control={control}
          name="lastName"
          label="Surname"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          disabled={formDisabled}
          control={control}
          name="firstName"
          label="Firstname"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          disabled={formDisabled}
          control={control}
          name="middleName"
          label="Middlename"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          control={control}
          label="Extension Name"
          name="extensionName"
          disabled={formDisabled}
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          control={control}
          label="House/Lot/Bldg No"
          name="houseLotBldgNo"
          disabled={formDisabled}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          control={control}
          label="Street/Sitio/Subdv"
          name="streetSitioSubdv"
          disabled={formDisabled}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SelectField
          control={control}
          label="Barangay"
          name="barangay"
          options={barangayOptions}
          disabled={formDisabled}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          disabled={formDisabled}
          control={control}
          label="Municipality"
          name="municipality"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          disabled={formDisabled}
          control={control}
          label="Province"
          name="province"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          disabled={formDisabled}
          control={control}
          label="Region"
          name="region"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          control={control}
          placeholder="09xxxxxxxxx"
          label="Contact No."
          name="contactNumber"
          disabled={formDisabled}
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <RadioSelect
          name="sex"
          control={control}
          options={genderOptions}
          label="Gender"
          disabled={formDisabled}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SelectField
          control={control}
          name="civilStatus"
          label="Civil Status"
          options={civilStatusOptions}
          disabled={formDisabled}
        />
      </Grid>
      {civilStatus === 2 && (
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            control={control}
            label="Name of Spouse"
            name="nameOfSpouse"
            variant="outlined"
            disabled={formDisabled}
          />
        </Grid>
      )}
      {civilStatus !== 1 && sex == 2 && (
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            control={control}
            label="Mother's Maiden Name"
            name="mothersMaidenName"
            disabled={formDisabled}
          />
        </Grid>
      )}
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          control={control}
          fullWidth
          label="Religion"
          name="religion"
          variant="outlined"
          disabled={formDisabled}
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
          maxDate={new Date()}
          minDate={new Date('1940-01-01')}
          disabled={formDisabled}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          control={control}
          label="Place of birth"
          name="placeOfBirth"
          disabled={formDisabled}
        />
      </Grid>
    </Grid>
  )
}
