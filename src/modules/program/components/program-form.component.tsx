import Grid from '@mui/material/Grid'
import { UseFormReturn } from 'react-hook-form'
import { IProgramSchema } from '@/modules/program/constants'
import TextField from '@/components/text-field'
import DatePicker from '@/components/date-picker'

interface ProgramFormProps {
  formProps: UseFormReturn<IProgramSchema>
}

export default function ProgramForm(props: ProgramFormProps) {
  const { control } = props.formProps
  return (
    <Grid className="p-4" container spacing={4}>
      <Grid container item xs={12} md={6} spacing={4}>
        <Grid item xs={12}>
          <TextField control={control} name="name" label="Program Name" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            control={control}
            minRows={4}
            name="description"
            label="Description"
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} md={6} spacing={4}>
        <Grid item xs={12}>
          <TextField control={control} name="type" label="Type" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            control={control}
            name="sponsoringAgency"
            label="Sponsoring Agency"
          />
        </Grid>
        <Grid container spacing={4} item xs={12}>
          <Grid item xs={12} md={6}>
            <DatePicker control={control} name="dateStart" label="Start" />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker control={control} name="dateEnd" label="End" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
