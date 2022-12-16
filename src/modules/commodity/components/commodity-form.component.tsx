import Grid from '@mui/material/Grid'
import { UseFormReturn } from 'react-hook-form'
import { ICommoditySchema } from '@/modules/commodity/constants'
import TextField from '@/components/text-field'
import { typeOptions } from '@/modules/commodity/constants/form-options'
import SelectField from '@/components/select-field'

interface CommodityFormProps {
  formProps: UseFormReturn<ICommoditySchema>
}

export function CommodityForm(props: CommodityFormProps) {
  const { control } = props.formProps
  return (
    <Grid container spacing={3}>
      <Grid item xs={6} md={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField control={control} name="name" label="Commodity" />
          </Grid>
          <Grid item xs={12}>
            <SelectField
              control={control}
              name="commodityType"
              label="Type"
              options={typeOptions}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField control={control} name="unit" label="Unit of Measure" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              control={control}
              name="conversionFactor"
              label="Conversion to MT"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
