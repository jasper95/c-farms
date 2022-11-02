import { fieldIsRequired } from '@/lib/utils/form-utils'
import * as yup from 'yup'

export const userSchema = yup.object({
  name: yup.string().required(fieldIsRequired).default(''),
  email: yup
    .string()
    .email('Invalid email format')
    .required(fieldIsRequired)
    .default(''),
  role: yup.string().required(fieldIsRequired).default(''),
  active: yup.boolean().required(fieldIsRequired).default(true),
})

export type IUserSchema = yup.InferType<typeof userSchema>
