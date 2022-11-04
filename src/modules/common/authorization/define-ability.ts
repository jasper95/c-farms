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
  encoder(user, { can, cannot }) {
    can(PermissionEnum.Create, ResourceEnum.AnnualInfo)
    can(PermissionEnum.Read, ResourceEnum.AnnualInfo)
    can(PermissionEnum.Read, ResourceEnum.Association)
    can(PermissionEnum.Read, ResourceEnum.Commodity)
    can(PermissionEnum.Read, ResourceEnum.CommodityProduce)
    can(PermissionEnum.Create, ResourceEnum.CommodityProduce)
    can(PermissionEnum.Read, ResourceEnum.Dashboard)
    can(PermissionEnum.Read, ResourceEnum.Farm)
    can(PermissionEnum.Create, ResourceEnum.Farm)
    can(PermissionEnum.Read, ResourceEnum.FarmProduce)
    can(PermissionEnum.Create, ResourceEnum.Household)
    can(PermissionEnum.Read, ResourceEnum.Household)
    can(PermissionEnum.Update, ResourceEnum.Household)
    can(PermissionEnum.Read, ResourceEnum.Program)
    can(PermissionEnum.Read, ResourceEnum.ProgramBeneficiaries)
  },
  administrator(user, { can }) {
    can(PermissionEnum.Manage, ResourceEnum.All)
  },
  manager(user, { can }) {
    can(PermissionEnum.Manage, ResourceEnum.AnnualInfo)
    can(PermissionEnum.Manage, ResourceEnum.Association)
    can(PermissionEnum.Update, ResourceEnum.AssociationBeneficiaries)
    can(PermissionEnum.Manage, ResourceEnum.Commodity)
    can(PermissionEnum.Manage, ResourceEnum.CommodityProduce)
    can(PermissionEnum.Manage, ResourceEnum.Farm)
    can(PermissionEnum.Manage, ResourceEnum.FarmProduce)
    can(PermissionEnum.Manage, ResourceEnum.Household)
    can(PermissionEnum.Update, ResourceEnum.HouseholdBeneficiaries)
    can(PermissionEnum.Manage, ResourceEnum.Program)
    can(PermissionEnum.Manage, ResourceEnum.ProgramBeneficiaries)
  },
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
