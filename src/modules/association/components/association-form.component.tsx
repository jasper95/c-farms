import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { UseFormReturn } from 'react-hook-form'
import TextField from '@/components/text-field'
import DateRangePicker from '@/components/date-range-picker'
import { IAssociationSchema } from '../constants'
import SwitchField from '@/components/switch-field'

interface AssociationFormProps {
  formDisabled?: boolean
  formProps: UseFormReturn<IAssociationSchema>
}

export default function AssociationForm(props: AssociationFormProps) {
  const { formDisabled } = props
  const { control } = props.formProps
  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <TextField
          disabled={formDisabled}
          control={control}
          name="name"
          label="Name"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          disabled={formDisabled}
          control={control}
          name="shortName"
          label="Short Name"
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
      <Grid item md={6} xs={12}>
        <SwitchField
          disabled={formDisabled}
          control={control}
          name="active"
          label="Active"
        />
      </Grid>
    </Grid>
  )
}
