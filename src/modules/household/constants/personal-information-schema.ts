import { fieldIsRequired } from '@/lib/utils/form-utils'
import * as yup from 'yup'
import {
  civilStatusOptions,
  genderOptions,
  regionOptions,
} from './form-options'

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
  region: yup
    .string()
    .oneOf(regionOptions.map((e) => e.value))
    .required(fieldIsRequired)
    .default('Region VII'),
  contactNumber: yup
    .string()
    .required(fieldIsRequired)
    .default('')
    .matches(
      /^09\d{9}?$/,
      'Contact number must be in the following format: 09xxxxxxxxx'
    ),
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
    .default(new Date('1980-01-01')),
  placeOfBirth: yup
    .string()
    .required(fieldIsRequired)
    .label('Place of birth')
    .default(''),
})

export type IPersonalInformationSchema = yup.InferType<
  typeof personalInfomationSchema
>
