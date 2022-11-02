import {
  createMongoAbility,
  CreateAbility,
  AbilityBuilder,
} from '@casl/ability'
import { User } from 'next-auth'
import { PermissionEnum } from './enums/permission.enum'
import { ResourceEnum } from './enums/resource.enum'
import { RoleEnum } from './enums/role.enum'
import { AppAbility } from '../../../lib/stores/auth.store'

export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

type DefinePermissions = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void

const rolePermissions: Record<RoleEnum, DefinePermissions> = {
  encoder(user, { can }) {
    can(PermissionEnum.Create, ResourceEnum.Household)
    can(PermissionEnum.Read, ResourceEnum.Household)
  },
  administrator(user, { can }) {
    can(PermissionEnum.Create, ResourceEnum.All)
    can(PermissionEnum.Read, ResourceEnum.All)
    can(PermissionEnum.Update, ResourceEnum.All)
    can(PermissionEnum.Delete, ResourceEnum.All)
  },
  manager(user, { can }) {},
}

export function defineAbilityFor(user: User) {
  const builder = new AbilityBuilder(createAppAbility)

  if (rolePermissions[user.role]) {
    rolePermissions[user.role](user, builder)
  } else {
    throw new Error(`Trying to use unknown role "${user.role}"`)
  }

  return builder.build()
}
