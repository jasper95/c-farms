import * as yup from 'yup'

export const annualInfoSchema = yup.object({
  farmworkerActivityType: yup.array().of(yup.string()).default([]),
  fisherActivityType: yup.array().of(yup.string()).default([]),
  highestFormalEducation: yup.string().default(''),
  grossAnnualIncomeFarming: yup.number().default(0),
  grossAnnualIncomeNonfarming: yup.number().default(0),
  year: yup.number().default(new Date().getFullYear()),
  mainLivelihood: yup.array().of(yup.string()).default([]),
})

export type IAnnualInfoSchema = yup.InferType<typeof annualInfoSchema>
