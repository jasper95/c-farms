import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Link from '@/components/link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import PersonIcon from '@mui/icons-material/Person'
import GroupIcon from '@mui/icons-material/Group'
import ListItemText from '@mui/material/ListItemText'
import CropIcon from '@mui/icons-material/Crop'
import { FarmListRowInterface } from '../interfaces'
import Box from '@mui/material/Box'

interface IFarmPopupProps {
  data: FarmListRowInterface
}
export function FarmPopup(props: IFarmPopupProps) {
  const { data } = props
  const list = [
    {
      id: 'household',
      icon: <GroupIcon />,
      label: 'Household',
      value: (
        <Link underline="hover" href={`/household/${data.householdId}`}>
          {[data.firstName, data.lastName].join(' ')}
        </Link>
      ),
    },
    {
      id: 'owner',
      icon: <PersonIcon />,
      value: data.ownerName,
      label: 'Owner',
    },
    {
      id: 'size',
      icon: <CropIcon />,
      value: `${data.sizeInHaTotal} hectares`,
      label: 'Size',
    },
  ]
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardHeader
        title={
          <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
            <Link
              sx={{ mr: 1 }}
              underline="hover"
              passHref
              href={`/farm/${data.id}`}
            >
              {data.name}
            </Link>
          </Box>
        }
      />
      <CardContent sx={{ p: 2 }}>
        <List disablePadding sx={{ width: '100%' }}>
          {list.map((item) => (
            <ListItem disablePadding disableGutters key={item.id}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ variant: 'subtitle2' }}
                primary={item.value}
                secondary={item.label}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}
