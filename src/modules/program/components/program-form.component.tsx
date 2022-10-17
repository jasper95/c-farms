import Grid from '@mui/material/Grid'
import { UseFormReturn } from 'react-hook-form'
import { IProgramSchema } from '@/modules/program/constants'
import TextField from '@/components/text-field'
import DateRangePicker from '@/components/date-range-picker'
import { typeOptions } from '@/modules/program/constants/form-options'
import SelectField from '@/components/select-field'

interface ProgramFormProps {
  formProps: UseFormReturn<IProgramSchema>
}

export default function ProgramForm(props: ProgramFormProps) {
  const { control } = props.formProps
  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <TextField control={control} name="name" label="Program Name" />
      </Grid>
      <Grid item md={6} xs={12}>
        <SelectField
          control={control}
          name="type"
          label="Type"
          options={typeOptions}
        />
      </Grid>
      <Grid item md={12} xs={12}>
        <DateRangePicker label="Duration" control={control} name="dateRange" />
      </Grid>
      <Grid item md={12} xs={12}>
        <TextField
          control={control}
          rows={7}
          name="description"
          label="Description"
          multiline
        />
      </Grid>
      <Grid item md={12} xs={12}>
        <TextField
          control={control}
          name="sponsoringAgency"
          label="Sponsoring Agency"
        />
      </Grid>
    </Grid>
  )
}
