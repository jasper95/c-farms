import * as yup from 'yup'

export const OTHER_DETAILS_SCHEMA = yup.object({
  hh_head: yup.string().default(''),
  relationship_head: yup.string().default(''),
  member_male: yup.number().default(0),
  member_female: yup.number().default(0),
  gov_id_type: yup.string().default(''),
  gov_id_no: yup.string().default(''),
  assoc_id: yup.string().default(''),
  highest_education: yup.string().default(''),
  is_pwd: yup.boolean().default(false),
  is_4ps: yup.boolean().default(false),
  ip_membership: yup.string().default(''),
  emergency_contact_person: yup.string().default(''),
  emergency_contact_no: yup.string().default(''),
})

export type IOtherDetailsSchema = yup.InferType<typeof OTHER_DETAILS_SCHEMA>
