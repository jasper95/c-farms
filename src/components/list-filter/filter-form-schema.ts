import * as yup from 'yup'
import { FilterTypeEnum } from './filter-type.enum'

export const filterSchema = yup.object({
  field: yup.string().default('').required(),
  type: yup
    .mixed<FilterTypeEnum>()
    .oneOf(Object.values(FilterTypeEnum))
    .required()
    .default(FilterTypeEnum.Is),
  value: yup.mixed().required(),
  options: yup.array().of(
    yup.object({
      label: yup.string().default(''),
      value: yup.mixed().default(''),
    })
  ),
})

export type IFilterFormSchema = yup.InferType<typeof filterSchema>
