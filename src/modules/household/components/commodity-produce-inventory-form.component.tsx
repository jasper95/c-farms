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
import { ICommodityProduceInventorySchema } from '@/modules/commodity-produce-inventory/constants'

interface ICommodityProduceInventoryFormProps {
  formProps: UseFormReturn<ICommodityProduceInventorySchema>
}
export function CommodityProduceInventoryForm(
  props: ICommodityProduceInventoryFormProps
) {
  const { formProps } = props
  const { control } = formProps

  const [options, setOptions] = useState<Option[]>([])
  return (
    <Grid container spacing={2}>
      <Grid item md={12} xs={12}>
        <YearPicker control={control} label="Year" name="year" />
      </Grid>
    </Grid>
  )

  function onCreate(string: string) {
    setOptions([...options, { value: `${Math.random()}`, label: string }])
  }
}
