import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { UseFormReturn } from 'react-hook-form'
import { ICommoditySchema } from '@/modules/commodity/constants'
import TextField from '@/components/text-field'
import DateRangePicker from '@/components/date-range-picker'
import { typeOptions } from '../constants/form-options'
import SelectField from '@/components/select-field'

interface CommodityFormProps {
  formProps: UseFormReturn<ICommoditySchema>
}

export default function CommodityForm(props: CommodityFormProps) {
  const { control } = props.formProps
  return (
    <Grid sx={{ my: 0 }} container>
      <Grid item xs={6} md={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField control={control} name="commodity" label="Commodity" />
          </Grid>
          <Grid item xs={12}>
            <SelectField
              control={control}
              name="commodityType"
              label="Type"
              options={typeOptions}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
