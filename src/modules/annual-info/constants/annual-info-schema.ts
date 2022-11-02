import { fieldIsRequired } from '@/lib/utils/form-utils'
import * as yup from 'yup'

export const annualInfoSchema = yup.object({
  mainLivelihood: yup
    .array()
    .required(fieldIsRequired)
    .of(yup.string())
    .min(1, 'Must be at least 1 livelihood')
    .default([]),
  farmworkerActivityType: yup
    .array()
    .of(yup.string())
    .when('mainLivelihood', (mainLivelihood, schema) => {
      return mainLivelihood.includes('Farmworker/Laborer')
        ? yup.array().min(1, 'At least 1 farm activity is required.')
        : schema
    })
    .default([]),
  fisherActivityType: yup
    .array()
    .of(yup.string())
    .when('mainLivelihood', (mainLivelihood, schema) => {
      return mainLivelihood.includes('Fisherfolk')
        ? yup.array().min(1, 'At least 1 fishing activity is required.')
        : schema
    })
    .default([]),
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
})

export type IAnnualInfoSchema = yup.InferType<typeof annualInfoSchema>
