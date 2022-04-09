import { Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import { KeyboardDatePicker } from '@material-ui/pickers/DatePicker'
import { CIVIL_STATUS_OPTIONS, GENDER_OPTIONS } from './const'
import RadioSelect from '@/components/radio-select'
import SelectField from '@/components/select-field'

function NewHouseholdStep1() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <TextField fullWidth label="Surname" name="text" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField fullWidth label="Firstname" name="text" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          label="Middlename"
          name="text"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          label="Extension Name"
          name="text"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          label="House/Lot/Bldg No"
          name="text"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          label="Street/Sitio/Subdv"
          name="text"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField fullWidth label="Barangay" name="text" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          label="Municipality"
          name="text"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField fullWidth label="Province" name="text" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField fullWidth label="Region" name="text" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          label="Contact No."
          name="text"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <RadioSelect options={GENDER_OPTIONS} label="Gender" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SelectField label="Civil Status" options={CIVIL_STATUS_OPTIONS} />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          label="Name of Spouse"
          name="text"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          label="Mother's Maiden Name"
          name="text"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField fullWidth label="Religion" name="text" variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          label="Birthdate"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          id="published_date"
          autoOk
          value={new Date()}
          onChange={() => {
            // setValue('published_date', value)
          }}
          // error={Boolean(errors.published_date)}
          // helperText={errors.published_date?.message}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          label="Place of birth"
          name="text"
          variant="outlined"
        />
      </Grid>
    </Grid>
  )
}

export default NewHouseholdStep1
