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
    can(PermissionEnum.Read, ResourceEnum.Dashboard)
    can(PermissionEnum.Create, ResourceEnum.AnnualInfo)
    can(PermissionEnum.Read, ResourceEnum.AnnualInfo)
    can(PermissionEnum.Read, ResourceEnum.Association)
    can(PermissionEnum.Read, ResourceEnum.Commodity)
    can(PermissionEnum.Read, ResourceEnum.CommodityProduce)
    can(PermissionEnum.Create, ResourceEnum.CommodityProduce)
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
    can(PermissionEnum.Create, ResourceEnum.All)
    can(PermissionEnum.Read, ResourceEnum.All)
    can(PermissionEnum.Update, ResourceEnum.All)
    can(PermissionEnum.Delete, ResourceEnum.All)
  },
  manager(user, { can }) {
    can(PermissionEnum.Read, ResourceEnum.All)
    can(PermissionEnum.Create, ResourceEnum.AnnualInfo)
    can(PermissionEnum.Update, ResourceEnum.AnnualInfo)
    can(PermissionEnum.Delete, ResourceEnum.AnnualInfo)
    can(PermissionEnum.Create, ResourceEnum.Association)
    can(PermissionEnum.Delete, ResourceEnum.Association)
    can(PermissionEnum.Update, ResourceEnum.Association)
    can(PermissionEnum.Update, ResourceEnum.AssociationBeneficiaries)
    can(PermissionEnum.Create, ResourceEnum.Commodity)
    can(PermissionEnum.Delete, ResourceEnum.Commodity)
    can(PermissionEnum.Update, ResourceEnum.Commodity)
    can(PermissionEnum.Create, ResourceEnum.CommodityProduce)
    can(PermissionEnum.Update, ResourceEnum.CommodityProduce)
    can(PermissionEnum.Delete, ResourceEnum.CommodityProduce)
    can(PermissionEnum.Create, ResourceEnum.Farm)
    can(PermissionEnum.Update, ResourceEnum.Farm)
    can(PermissionEnum.Delete, ResourceEnum.Farm)
    can(PermissionEnum.Create, ResourceEnum.Household)
    can(PermissionEnum.Update, ResourceEnum.Household)
    can(PermissionEnum.Delete, ResourceEnum.Household)
    can(PermissionEnum.Update, ResourceEnum.HouseholdBeneficiaries)
    can(PermissionEnum.Create, ResourceEnum.Program)
    can(PermissionEnum.Update, ResourceEnum.Program)
    can(PermissionEnum.Delete, ResourceEnum.Program)
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
