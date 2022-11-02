import Grid from '@mui/material/Grid'
import SelectField from '@/components/select-field'
import {
  livelihoodOptions,
  educationBackgroundOptions,
} from '@/modules/household/constants'
import Divider from '@mui/material/Divider'
import { UseFormReturn } from 'react-hook-form/dist/types/form'
import TextField from '@/components/text-field'
import CreatableSelectField from '@/components/creatable-select-field'
import MultiSelectField from '@/components/multi-select-field'
import { IAnnualInfoSchema } from '@/modules/annual-info/constants'
import YearPicker from '@/components/year-picker'
import InputAdornment from '@mui/material/InputAdornment'
import { useWatch } from 'react-hook-form'

interface IAnnualInfoFormProps {
  formProps: UseFormReturn<IAnnualInfoSchema>
}
export function AnnualInfoForm(props: IAnnualInfoFormProps) {
  const { formProps } = props
  const { control, formState } = formProps
  const mainLivelihood = useWatch({ control, name: 'mainLivelihood' })

  return (
    <Grid container spacing={2}>
      <Grid item md={12} xs={12}>
        <YearPicker
          control={control}
          label="Year"
          name="year"
          maxDate={new Date()}
        />
      </Grid>
      <Grid item md={12} xs={12}>
        Gross Annual Income
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          control={control}
          label="Farming"
          name="grossAnnualIncomeFarming"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">₱</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          control={control}
          label="Non-farming"
          name="grossAnnualIncomeNonfarming"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">₱</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} md={6}>
        <MultiSelectField
          control={control}
          name="mainLivelihood"
          options={livelihoodOptions}
          label="Main livelihood"
        />
      </Grid>
      {mainLivelihood.includes('Farmworker/Laborer') && (
        <Grid item md={6} xs={12}>
          <CreatableSelectField
            control={control}
            name="farmworkerActivityType"
            label="Farmer Activities"
          />
        </Grid>
      )}
      {mainLivelihood.includes('Fisherfolk') && (
        <Grid item md={6} xs={12}>
          <CreatableSelectField
            control={control}
            name="fisherActivityType"
            label="Fisher Activities"
          />
        </Grid>
      )}
      <Grid item md={6} xs={12}>
        <SelectField
          control={control}
          options={educationBackgroundOptions}
          label="Highest formal Education"
          name="highestFormalEducation"
        />
      </Grid>
    </Grid>
  )
}
