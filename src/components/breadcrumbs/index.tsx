import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@/components/link'
import MuiLink from '@mui/material/Link'
import { useRouter } from 'next/dist/client/router'

type IBreadcrumbsProps = {
  crumbs: {
    name: string
    link?: string
  }[]
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
    <MuiBreadcrumbs className="text-lg py-4" aria-label="breadcrumb">
      {crumbs.map((crumb, i) => (
        <Link
          key={crumb.name}
          href={crumb.link ?? links[i] ?? ''}
          passHref
          variant="h6"
          underline="none"
          color={i === crumbs.length - 1 ? 'primary' : 'inherit'}
        >
          {crumb.name}
        </Link>
      ))}
    </MuiBreadcrumbs>
  )
}
