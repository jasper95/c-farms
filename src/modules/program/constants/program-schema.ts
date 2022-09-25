import { fieldIsRequired } from '@/shared/utils/form-utils'
import * as yup from 'yup'

export const PROGRAM_SCHEMA = yup.object({
  name: yup.string().required(fieldIsRequired).default(''),
  description: yup.string().required(fieldIsRequired).default(''),
  type: yup.string().required(fieldIsRequired).default(''),
  sponsoringAgency: yup.string().required(fieldIsRequired).default(''),
  dateRange: yup
    .array()
    .of(yup.date().nullable().default(null))
    .default([null, null]),
})

export type IProgramSchema = yup.InferType<typeof PROGRAM_SCHEMA>
