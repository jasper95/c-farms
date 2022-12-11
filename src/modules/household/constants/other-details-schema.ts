import { fieldIsRequired } from '@/lib/utils/form-utils'
import * as yup from 'yup'

export const otherDetailsSchema = yup.object({
  nameOfHouseholdHead: yup.string().default(''),
  relationshipToHouseholdHead: yup.string().default(''),
  maleCount: yup.number().required(fieldIsRequired).integer().min(0).default(0),
  femaleCount: yup
    .number()
    .required(fieldIsRequired)
    .integer()
    .min(0)
    .default(0),
  governmentIdType: yup.string().default(''),
  governmentIdNo: yup.string().default(''),
  personWithDisability: yup.boolean().default(false),
  is4psBeneficiary: yup.boolean().default(false),
  isHouseholdHead: yup.boolean().default(false),
  ipMembership: yup.string().default(''),
  emergencyContactName: yup.string().required(fieldIsRequired).default(''),
  emergencyContactNumber: yup
    .string()
    .required(fieldIsRequired)
    .matches(
      /^09\d{9}?$/,
      'Contact number must be in the following format: 09xxxxxxxxx'
    )
    .default(''),
})

export type IOtherDetailsSchema = yup.InferType<typeof otherDetailsSchema>
