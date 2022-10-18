import { RoleTypeEnum } from '@/modules/user/enums/role-type.enum'

export const roleTypeOptions = Object.entries(RoleTypeEnum).map(
  ([label, value]) => ({ label, value })
)
