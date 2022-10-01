import Grid from '@mui/material/Grid'
import SelectField from '@/components/select-field'
import {
  LIVELIHOOD_OPTIONS,
  IFarmProfileSchema,
  EDUCATION_BACKGROUND_OPTIONS,
} from '@/modules/household/constants'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { UseFormReturn } from 'react-hook-form/dist/types/form'
import TextField from '@/components/text-field'
import CreatableSelectField from '@/components/creatable-select-field'
import { useState } from 'react'
import { Option } from '@/components/creatable-select-field/interface'
import MultiSelectField from '@/components/multi-select-field'

interface IFarmProfile {
  formProps: UseFormReturn<IFarmProfileSchema>
}
export function FarmProfile(props: IFarmProfile) {
  const { formProps } = props
  const { control, getValues } = formProps

  const [options, setOptions] = useState<Option[]>([])
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <b>Gross annual income last year:</b>
        </Typography>
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          label="Farming"
          name="grossAnnualIncomeFarming"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          control={control}
          label="Non-farming"
          name="grossAnnualIncomeNonfarming"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} md={4}>
        <MultiSelectField
          control={control}
          name="mainLivelihood"
          options={LIVELIHOOD_OPTIONS}
          label="Main livelihood"
        />
      </Grid>
      <Grid item md={6}>
        <CreatableSelectField
          control={control}
          name="farmworkerActivityType"
          label="Farmer Activities"
        />
      </Grid>
      <Grid item md={6}>
        <CreatableSelectField
          control={control}
          name="fisherActivityType"
          label="Fisher Activities"
        />
      </Grid>
      <Grid item md={6}>
        <SelectField
          control={control}
          options={EDUCATION_BACKGROUND_OPTIONS}
          label="Highest formal Education"
          name="highestFormalEducation"
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
