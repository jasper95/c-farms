import * as yup from 'yup'

export const FARM_PROFILE_SCHEMA = yup.object({
  farmworkerActivityType: yup.array().of(yup.string()).default([]),
  fisherActivityType: yup.array().of(yup.string()).default([]),
  highestFormalEducation: yup.string().default(''),
  grossAnnualIncomeFarming: yup.number().default(0),
  grossAnnualIncomeNonfarming: yup.number().default(0),
  mainLivelihood: yup.array().of(yup.string()).default([]),
})

export type IFarmProfileSchema = yup.InferType<typeof FARM_PROFILE_SCHEMA>
