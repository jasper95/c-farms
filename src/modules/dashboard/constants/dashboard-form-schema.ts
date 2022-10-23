import * as yup from 'yup'

export const dashboardFormSchema = yup.object({
  livestock: yup.string().default('Cattle'),
  crop: yup.string().default('Banana'),
})
