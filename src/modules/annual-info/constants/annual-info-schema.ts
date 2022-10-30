import { fieldIsRequired } from '@/lib/utils/form-utils'
import * as yup from 'yup'

export const annualInfoSchema = yup.object({
  farmworkerActivityType: yup.array().of(yup.string()).default([]),
  fisherActivityType: yup.array().of(yup.string()).default([]),
  highestFormalEducation: yup.string().required(fieldIsRequired).default(''),
  grossAnnualIncomeFarming: yup.number().required(fieldIsRequired).default(0),
  grossAnnualIncomeNonfarming: yup
    .number()
    .required(fieldIsRequired)
    .default(0),
  year: yup
    .number()
    .required(fieldIsRequired)
    .default(new Date().getFullYear()),
  mainLivelihood: yup
    .array()
    .required(fieldIsRequired)
    .of(yup.string())
    .min(1, 'Must be at least 1')
    .default([]),
})

export type IAnnualInfoSchema = yup.InferType<typeof annualInfoSchema>
