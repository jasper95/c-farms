import Grid from '@mui/material/Grid'
import SelectField from '@/components/select-field'
import { UseFormReturn } from 'react-hook-form/dist/types/form'
import TextField from '@/components/text-field'
import { useState } from 'react'
import { Option } from '@/components/creatable-select-field/interface'
import YearPicker from '@/components/year-picker'
import { ICommodityProduceSchema } from '@/modules/commodity-produce/constants'
import { useCommodityProduceFormHook } from '@/modules/commodity-produce/hooks/commodity-produce-form.hook'
import SwitchField from '@/components/switch-field'

interface ICommodityProduceFormProps {
  formProps: UseFormReturn<ICommodityProduceSchema>
}
export function CommodityProduceForm(props: ICommodityProduceFormProps) {
  const { formProps } = props
  const { control } = formProps

  const [options, setOptions] = useState<Option[]>([])
  const { commodityOptions, farmOptions } = useCommodityProduceFormHook()
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <YearPicker control={control} label="Year" name="year" />
      </Grid>
      <Grid item sm={12} md={6}>
        <SelectField
          label="Farm"
          control={control}
          options={farmOptions}
          name="farmId"
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <SelectField
          label="Commodity"
          control={control}
          options={commodityOptions}
          name="commodityId"
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <SwitchField
          control={control}
          name="organicPractitioner"
          label="Organic"
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <TextField
          label="Produce"
          control={control}
          name="produce"
          type="number"
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <TextField
          label="Area Used"
          control={control}
          name="areaUsed"
          type="number"
        />
      </Grid>
    </Grid>
  )

  function onCreate(string: string) {
    setOptions([...options, { value: `${Math.random()}`, label: string }])
  }
}
