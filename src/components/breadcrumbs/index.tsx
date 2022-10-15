import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@/components/link'
import { useRouter } from 'next/dist/client/router'
import Box from '@mui/material/Box'

export type BreadCrumb = {
  name: string
}
type IBreadcrumbsProps = {
  crumbs: BreadCrumb[]
}
export default function Breadcrumbs(props: IBreadcrumbsProps) {
  const { crumbs } = props
  const router = useRouter()
  const currentPath = router.asPath
  const paths = currentPath.split('/').filter(Boolean)

  const links = paths.map((path, i) => {
    return `/${paths.slice(0, i + 1).join('/')}`
  })
  return (
    <Box sx={{ mb: 2 }}>
      <MuiBreadcrumbs className="text-lg" aria-label="breadcrumb">
        {crumbs.map((crumb, i) => (
          <Link
            key={crumb.name}
            href={links[i] ?? ''}
            passHref
            variant="h6"
            underline="none"
            color={i === crumbs.length - 1 ? 'primary' : 'inherit'}
          >
            {crumb.name}
          </Link>
        ))}
      </MuiBreadcrumbs>
    </Box>
  )
}
