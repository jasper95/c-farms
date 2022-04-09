import RadioSelect from '@/components/radio-select'
import SelectField from '@/components/select-field'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { BOOLEAN_OPTION, EDUCATION_BACKGROUND_OPTIONS } from './const'

function NewHouseholdStep2() {
  return (
    <Grid container spacing={4}>
      <Grid item md={12} xs={12}>
        <RadioSelect options={BOOLEAN_OPTION} label="Household head" />
      </Grid>
      <Grid item md={12}>
        <Typography variant="subtitle1">
          <b>If not a household head,</b>
        </Typography>
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          fullWidth
          label="Name of household head"
          variant="outlined"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField fullWidth label="Relationship" variant="outlined" />
      </Grid>
      <Grid item md={12}>
        <Typography variant="subtitle1">
          <b>No of living household members:</b>
        </Typography>
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField fullWidth label="Male" type="number" variant="outlined" />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          fullWidth
          label="Female"
          name="number"
          type="number"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item md={4}>
        <SelectField
          options={EDUCATION_BACKGROUND_OPTIONS}
          label="Highest formal Education"
        />
      </Grid>
      <Grid item md={4}>
        <RadioSelect options={BOOLEAN_OPTION} label="Person with disability" />
      </Grid>
      <Grid item md={4}>
        <RadioSelect options={BOOLEAN_OPTION} label="4P's benificiary" />
      </Grid>
      <Grid item md={4}>
        <RadioSelect
          options={BOOLEAN_OPTION}
          label="Member of Indigenous Group"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          fullWidth
          label="Government ID No."
          type="text"
          variant="outlined"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          fullWidth
          label="Farmer's association membership"
          type="text"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          fullWidth
          label="Emergency Contact Name"
          type="text"
          variant="outlined"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          fullWidth
          label="Emergency Contact No."
          type="text"
          variant="outlined"
        />
      </Grid>
    </Grid>
  )
}

export default NewHouseholdStep2
