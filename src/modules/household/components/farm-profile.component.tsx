import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import {
  LIVELIHOOD_OPTIONS,
  IFarmProfileSchema,
} from '@/modules/household/constants'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { UseFormReturn } from 'react-hook-form/dist/types/form'
import TextField from '@/components/text-field'
import CreatableSelectField from '@/components/creatable-select-field'
import CheckboxField from '@/components/checkbox-field'
import { useState } from 'react'
import { Option } from '@/components/creatable-select-field/interface'

interface IFarmProfile {
  formProps: UseFormReturn<IFarmProfileSchema>
}
export function FarmProfile(props: IFarmProfile) {
  const { formProps } = props
  const { control } = formProps
  const [options, setOptions] = useState<Option[]>([])
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <b>Gross annual income last year:</b>
        </Typography>
      </Grid>
      <Grid item md={4}>
        <TextField control={control} label="Farming" name="gross_ann_farming" />
      </Grid>
      <Grid item md={4}>
        <TextField
          control={control}
          label="Non-farming"
          name="gross_ann_farming_non_farming"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CheckboxField
          control={control}
          name="livelihoods"
          options={LIVELIHOOD_OPTIONS}
          label="Main livelihood:"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item md={6}>
        <FormControl>
          <FormLabel component="legend">Kind of work:</FormLabel>
        </FormControl>
        <CreatableSelectField
          control={control}
          name="farmworker_activities"
          placeholder="Type and enter"
          options={options}
          onCreateOption={onCreate}
        />
      </Grid>
      <Grid item md={6}>
        <FormControl>
          <FormLabel component="legend">Type of fishing activity:</FormLabel>
        </FormControl>
        <CreatableSelectField
          control={control}
          name="fisherfolk_activities"
          placeholder="Type and enter"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  )

  function onCreate(string: string) {
    setOptions([...options, { value: `${Math.random()}`, label: string }])
  }
}
