import { fieldIsRequired } from '@/lib/utils/form-utils'
import * as yup from 'yup'

export const commoditySchema = yup.object({
  commodity: yup.string().required(fieldIsRequired).default(''),
  commodityType: yup.string().required(fieldIsRequired).default('Crop'),
})

export type ICommoditySchema = yup.InferType<typeof commoditySchema>
