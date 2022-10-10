import * as yup from 'yup'

export const commodityProduceInventorySchema = yup.object({
  year: yup.number().default(new Date().getFullYear()),
  farmId: yup.string().label('Farm').required().default(''),
  commodityId: yup.string().label('Commodity').required().default(''),
  produce: yup.number().default(0),
  organicPractitioner: yup.boolean().default(false),
  areaUsed: yup.number().default(0),
})

export type ICommodityProduceInventorySchema = yup.InferType<
  typeof commodityProduceInventorySchema
>
