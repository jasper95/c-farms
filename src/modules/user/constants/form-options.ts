import { RoleEnum } from '@/modules/common/authorization/enums/role.enum'

export const roleTypeOptions = Object.entries(RoleEnum).map(
  ([label, value]) => ({ label, value })
)
