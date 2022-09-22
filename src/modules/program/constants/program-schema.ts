import { fieldIsRequired } from '@/shared/utils/form-utils'
import * as yup from 'yup'

export const PROGRAM_SCHEMA = yup.object({
  name: yup.string().required(fieldIsRequired).default(''),
  description: yup.string().required(fieldIsRequired).default(''),
  type: yup.string().required(fieldIsRequired).default(''),
  sponsoringAgency: yup.string().required(fieldIsRequired).default(''),
  dateEnd: yup.date().required(fieldIsRequired).label('End date'),
  dateStart: yup.date().required(fieldIsRequired).label('Start date'),
})

export type IProgramSchema = yup.InferType<typeof PROGRAM_SCHEMA>
