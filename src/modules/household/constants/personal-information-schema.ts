import { fieldIsRequired } from '@/lib/utils/form-utils'
import * as yup from 'yup'
import { civilStatusOptions, genderOptions } from './form-options'

export const personalInfomationSchema = yup.object({
  lastName: yup
    .string()
    .required(fieldIsRequired)
    .label('Lastname')
    .default(''),
  firstName: yup
    .string()
    .required(fieldIsRequired)
    .label('Firstname')
    .default(''),
  middleName: yup.string().default(''),
  extensionName: yup.string().default(''),
  houseLotBldgNo: yup.string().default(''),
  referenceNo: yup.string().default(''),
  streetSitioSubdv: yup.string().default(''),
  barangay: yup.string().required(fieldIsRequired).default('ABIHILAN'),
  municipality: yup.string().required(fieldIsRequired).default('Candijay'),
  province: yup.string().required(fieldIsRequired).default('Bohol'),
  region: yup.string().required(fieldIsRequired).default('VII'),
  contactNumber: yup.string().required(fieldIsRequired).default(''),
  sex: yup
    .number()
    .oneOf(genderOptions.map((e) => e.value))
    .default(1),
  civilStatus: yup
    .number()
    .oneOf(civilStatusOptions.map((e) => e.value))
    .default(2),
  nameOfSpouse: yup.string().default(''),
  mothersMaidenName: yup.string().default(''),
  religion: yup.string().default(''),
  dateOfBirth: yup
    .date()
    .required(fieldIsRequired)
    .label('Date of birth')
    .default(null),
  placeOfBirth: yup
    .string()
    .required(fieldIsRequired)
    .label('Place of birth')
    .default(''),
})

export type IPersonalInformationSchema = yup.InferType<
  typeof personalInfomationSchema
>
