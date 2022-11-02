import {
  createMongoAbility,
  ForcedSubject,
  CreateAbility,
  MongoAbility,
  AbilityBuilder,
} from '@casl/ability'
import { User } from 'next-auth'
import { Role } from '../authentication/types/role'

const actions = ['manage', 'invite'] as const
const subjects = ['User', 'all'] as const
type AppAbilities = [
  typeof actions[number],
  (
    | typeof subjects[number]
    | ForcedSubject<Exclude<typeof subjects[number], 'all'>>
  )
]

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

type DefinePermissions = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void

const rolePermissions: Record<Role, DefinePermissions> = {
  encoder(user, { can }) {
    can('invite', 'User')
  },
  administrator(user, { can }) {
    can('manage', 'all')
  },
  manager(user, { can }) {},
}

export function defineAbilityFor(user: User): AppAbility {
  const builder = new AbilityBuilder(createAppAbility)

  if (rolePermissions[user.role]) {
    rolePermissions[user.role](user, builder)
  } else {
    throw new Error(`Trying to use unknown role "${user.role}"`)
  }

  return builder.build()
}
