import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import CreatableSelect from 'react-select/creatable'
import TextField from '@material-ui/core/TextField'
import { LIVELIHOOD_OPTIONS } from './const'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

function NewHouseholdStep3() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel component="legend">Main livelihood:</FormLabel>
          <FormGroup row>
            {LIVELIHOOD_OPTIONS.map((option) => (
              <FormControlLabel
                key={option.value}
                control={<Checkbox name="checkedA" />}
                label={option.label}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item md={6}>
        <FormControl>
          <FormLabel component="legend">Kind of work:</FormLabel>
        </FormControl>
        <CreatableSelect
          isClearable
          menuIsOpen={false}
          isMulti
          onChange={() => {}}
          placeholder="Type and enter"
        />
      </Grid>
      <Grid item md={6}>
        <FormControl>
          <FormLabel component="legend">Type of fishing activity:</FormLabel>
        </FormControl>
        <CreatableSelect
          isClearable
          menuIsOpen={false}
          isMulti
          onChange={() => {}}
          placeholder="Type and enter"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <b>Gross annual income last year:</b>
        </Typography>
      </Grid>
      <Grid item md={4}>
        <TextField fullWidth label="Farming" name="text" variant="outlined" />
      </Grid>
      <Grid item md={4}>
        <TextField
          fullWidth
          label="Non-farming"
          name="text"
          variant="outlined"
        />
      </Grid>
    </Grid>
  )
}

export default NewHouseholdStep3
