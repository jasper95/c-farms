import Popover from '@mui/material/Popover'
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { useLogout } from '@/modules/common/hooks/use-logout'

export function AccountMenu() {
  const { handleLogout } = useLogout()
  return (
    <PopupState variant="popover" popupId="account-menu-popover">
      {(popupState) => (
        <>
          <IconButton
            {...bindTrigger(popupState)}
            sx={{
              p: 0,
              ...(popupState.isOpen && {
                '&:before': {
                  zIndex: 1,
                  content: "''",
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  position: 'absolute',
                  // bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                },
              }),
            }}
          >
            <Avatar />
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <Box sx={{ my: 1.5, px: 2.5 }}>
              <Typography variant="subtitle2" noWrap>
                Jasper Bernales
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary' }}
                noWrap
              >
                bernalesjasper@gmail.com
              </Typography>
            </Box>

            <Divider sx={{ borderStyle: 'dashed' }} />

            <Divider sx={{ borderStyle: 'dashed' }} />

            <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
              Logout
            </MenuItem>
          </Popover>
        </>
      )}
    </PopupState>
  )
}
