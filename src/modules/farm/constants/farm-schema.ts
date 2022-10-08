import { fieldIsRequired } from '@/lib/utils/form-utils'
import * as yup from 'yup'

export const farmSchema = yup.object({
  ownerName: yup.string().required(fieldIsRequired).default(''),
  ownershipDocument: yup.string().required(fieldIsRequired).default(''),
  ownershipType: yup.string().required(fieldIsRequired).default(''),
  name: yup.string().required(fieldIsRequired).default(''),
  barangay: yup.string().required(fieldIsRequired).default(''),
  municipality: yup.string().required(fieldIsRequired).default('Candijay'),
  farmType: yup.string().required(fieldIsRequired).default(''),
  sizeInHaTotal: yup.number().required(),
  isAgrarianReformBeneficiary: yup.boolean().default(false),
  withinAncestralDomain: yup.boolean().default(false),
  location: yup.object().required(),
  householdId: yup.string().label('Household').required().default(''),
})

export type IFarmSchema = yup.InferType<typeof farmSchema>
