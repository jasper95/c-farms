import * as yup from 'yup'

export const dashboardFormSchema = yup.object({
  livestock: yup.string().default('bee90803-7fae-4ca4-baf8-7701fae92871'),
  crop: yup.string().default('92122044-a3d4-483e-a3b8-0154a857358e'),
  fishery: yup.string().default('bd90435f-65d5-4240-af5b-29e750419618'),
})
