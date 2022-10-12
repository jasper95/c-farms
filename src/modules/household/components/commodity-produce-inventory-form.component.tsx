import Grid from '@mui/material/Grid'
import SelectField from '@/components/select-field'
import Divider from '@mui/material/Divider'
import { UseFormReturn } from 'react-hook-form/dist/types/form'
import TextField from '@/components/text-field'
import CreatableSelectField from '@/components/creatable-select-field'
import { useState } from 'react'
import { Option } from '@/components/creatable-select-field/interface'
import MultiSelectField from '@/components/multi-select-field'
import YearPicker from '@/components/year-picker'
import { ICommodityProduceInventorySchema } from '@/modules/commodity-produce/constants'
import { useCommodityProduceFormHook } from '@/modules/commodity-produce/hooks/commodity-produce-form.hook'

interface ICommodityProduceInventoryFormProps {
  formProps: UseFormReturn<ICommodityProduceInventorySchema>
}
export function CommodityProduceForm(
  props: ICommodityProduceInventoryFormProps
) {
  const { formProps } = props
  const { control } = formProps

  const [options, setOptions] = useState<Option[]>([])
  const { commodityOptions } = useCommodityProduceFormHook()
  return (
    <Grid container spacing={2}>
      <Grid item md={12} xs={12}>
        <YearPicker control={control} label="Year" name="year" />
      </Grid>
      <Grid item sm={12} md={12}>
        <SelectField
          label="Commodity"
          control={control}
          options={commodityOptions}
          name="commodityId"
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
