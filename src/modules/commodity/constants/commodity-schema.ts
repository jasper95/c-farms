import { fieldIsRequired } from '@/lib/utils/form-utils'
import * as yup from 'yup'

export const commoditySchema = yup.object({
  name: yup.string().required(fieldIsRequired).default(''),
  commodityType: yup.string().required(fieldIsRequired).default('Crop'),
  unit: yup.string().required(fieldIsRequired).default('MT'),
  conversionFactor: yup.number().required(fieldIsRequired).default(1),
})

export type ICommoditySchema = yup.InferType<typeof commoditySchema>
