import Grid from '@mui/material/Grid'
import { UseFormReturn } from 'react-hook-form'
import { IProgramSchema } from '@/modules/program/constants'
import TextField from '@/components/text-field'
import DateRangePicker from '@/components/date-range-picker'
import { typeOptions } from '@/modules/program/constants/form-options'
import SelectField from '@/components/select-field'

interface ProgramFormProps {
  formProps: UseFormReturn<IProgramSchema>
  formDisabled?: boolean
}

export default function ProgramForm(props: ProgramFormProps) {
  const { formDisabled } = props
  const { control } = props.formProps
  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <TextField
          disabled={formDisabled}
          control={control}
          name="name"
          label="Program Name"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <SelectField
          disabled={formDisabled}
          control={control}
          name="type"
          label="Type"
          options={typeOptions}
        />
      </Grid>
      <Grid item md={12} xs={12}>
        <DateRangePicker
          disabled={formDisabled}
          label="Duration"
          control={control}
          name="dateRange"
        />
      </Grid>
      <Grid item md={12} xs={12}>
        <TextField
          disabled={formDisabled}
          control={control}
          rows={7}
          name="description"
          label="Description"
          multiline
        />
      </Grid>
      <Grid item md={12} xs={12}>
        <TextField
          disabled={formDisabled}
          control={control}
          name="sponsoringAgency"
          label="Sponsoring Agency"
        />
      </Grid>
    </Grid>
  )
}
