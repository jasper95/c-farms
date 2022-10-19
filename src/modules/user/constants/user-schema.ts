import { fieldIsRequired } from '@/lib/utils/form-utils'
import * as yup from 'yup'

export const userSchema = yup.object({
  firstName: yup.string().required(fieldIsRequired).default(''),
  lastName: yup.string().required(fieldIsRequired).default(''),
  username: yup
    .string()
    .email('Invalid email format')
    .required(fieldIsRequired)
    .default(''),
  role: yup.string().required(fieldIsRequired).default(''),
  active: yup.boolean().required(fieldIsRequired).default(true),
})

export type IUserSchema = yup.InferType<typeof userSchema>
