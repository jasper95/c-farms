import * as yup from 'yup'

export const commodityProduceSchema = yup.object({
  year: yup.number().default(new Date().getFullYear()),
  farmId: yup.string().label('Farm').required().default(''),
  commodityId: yup.string().label('Commodity').required().default(''),
  farmSize: yup.number().default(0),
  produce: yup.number().default(0),
  organicPractitioner: yup.boolean().default(false),
  areaUsed: yup
    .number()
    .default(0)
    .positive()
    .moreThan(0, `Area must be more than 0.`)
    .max(yup.ref('farmSize'), 'You have exceeded the farm size.'),
  produceInUnit: yup.number().default(0),
  unit: yup.string().default('MT'),
})

export type ICommodityProduceSchema = yup.InferType<
  typeof commodityProduceSchema
>
