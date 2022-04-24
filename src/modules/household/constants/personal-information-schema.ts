import { fieldIsRequired } from '@/shared/utils/form-utils'
import * as yup from 'yup'
import { CIVIL_STATUS_OPTIONS, GENDER_OPTIONS } from './form-options'

export const PERSONAL_INFORMATION_SCHEMA = yup.object({
  lname: yup.string().required(fieldIsRequired).label('Lastname').default(''),
  fname: yup.string().required(fieldIsRequired).label('Firstname').default(''),
  mname: yup.string().default(''),
  extname: yup.string().default(''),
  house_no: yup.string().default(''),
  reference_no: yup.string().default(''),
  street: yup.string().default(''),
  barangay: yup.string().required(fieldIsRequired).default(''),
  municipality: yup.string().required(fieldIsRequired).default('Candijay'),
  province: yup.string().required(fieldIsRequired).default('Bohol'),
  region: yup.string().required(fieldIsRequired).default('VII'),
  contact_no: yup.string().required(fieldIsRequired).default(''),
  sex: yup
    .string()
    .oneOf(GENDER_OPTIONS.map((e) => e.value))
    .default('M'),
  civil_status: yup
    .string()
    .oneOf(CIVIL_STATUS_OPTIONS.map((e) => e.value))
    .default('Single'),
  spouse: yup.string().default(''),
  mothers_maiden: yup.string().default(''),
  religion: yup.string().default(''),
  dob: yup
    .date()
    .required(fieldIsRequired)
    .label('Date of birth')
    .default(null),
  pob: yup
    .string()
    .required(fieldIsRequired)
    .label('Place of birth')
    .default(''),
})

export type IPersonalInformationSchema = yup.InferType<
  typeof PERSONAL_INFORMATION_SCHEMA
>
