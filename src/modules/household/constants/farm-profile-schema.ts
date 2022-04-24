import { fieldIsRequired } from '@/shared/utils/form-utils'
import * as yup from 'yup'

export const FARM_PROFILE_SCHEMA = yup.object({
  farmworker_activities: yup.array().of(yup.string()).default([]),
  fisherfolk_activities: yup.array().of(yup.string()).default([]),
  gross_ann_farming: yup.number().default(0),
  gross_ann_farming_non_farming: yup.number().default(0),
  livelihoods: yup.array().of(yup.string()).default([]),
})

export type IFarmProfileSchema = yup.InferType<typeof FARM_PROFILE_SCHEMA>
