import ListAltIcon from '@mui/icons-material/ListAlt'
import GrassIcon from '@mui/icons-material/Grass'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import PortraitIcon from '@mui/icons-material/Portrait'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import DashboardIcon from '@mui/icons-material/Dashboard'
import MapIcon from '@mui/icons-material/Map'
import { useAuthStore } from '@/lib/stores/auth.store'
import { useMemo } from 'react'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'

const menuItems = [
  {
    icon: DashboardIcon,
    resource: ResourceEnum.Dashboard,
    path: '/',
  },
  {
    icon: AccountCircleIcon,
    resource: ResourceEnum.Household,
    path: '/household',
  },
  {
    icon: MapIcon,
    resource: ResourceEnum.Farm,
    path: '/farm',
  },
  {
    icon: ListAltIcon,
    resource: ResourceEnum.Program,
    path: '/program',
  },
  {
    icon: GrassIcon,
    resource: ResourceEnum.Commodity,
    path: '/commodity',
  },
  {
    icon: Diversity3Icon,
    resource: ResourceEnum.Association,
    path: '/association',
  },
  {
    icon: PortraitIcon,
    resource: ResourceEnum.User,
    path: '/user',
  },
]
export function useNavigationMenu() {
  const { ability } = useAuthStore()

  const menus = useMemo(
    () =>
      menuItems.filter((e) => ability?.can(PermissionEnum.Read, e.resource)),
    [ability]
  )
  return {
    menus,
  }
}
