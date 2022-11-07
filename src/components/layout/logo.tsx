import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Link from '@/components/link'

export function Logo() {
  return (
    <Box
      sx={{
        ml: {
          xs: 1,
          sm: 2,
        },
      }}
    >
      <Avatar component={Link} href="/" src="/images/logo.svg" />
    </Box>
  )
}
