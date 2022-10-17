import { ProgramTypeEnum } from '@/modules/program/enums/program-type.enum'

export const typeOptions = Object.entries(ProgramTypeEnum).map(
  ([label, value]) => ({ label, value })
)
