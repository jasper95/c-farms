import { fieldIsRequired } from '@/lib/utils/form-utils'
import * as yup from 'yup'

export const associationSchema = yup.object({
  name: yup.string().required(fieldIsRequired).default(''),
  description: yup.string().required(fieldIsRequired).default(''),
  shortName: yup.string().required(fieldIsRequired).default(''),
  active: yup.boolean().required(fieldIsRequired).default(true),
})

export type IAssociationSchema = yup.InferType<typeof associationSchema>
