import { BreadCrumb } from '@/components/breadcrumbs'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export interface UseDetailsTabsCrumbsProps {
  tabs: {
    label: string
    value: string
  }[]
  name: string
}
export function useDetailsTabsCrumbs(props: UseDetailsTabsCrumbsProps) {
  const router = useRouter()
  const { id, tab = '' } = router.query
  const { tabs, name } = props
  const crumbs = useMemo(() => {
    const initial: BreadCrumb[] = [
      {
        name,
      },
      ...tabs
        .map((tab) => ({
          name: tab.label,
          link: tab.value,
        }))
        .slice(0, 1),
    ]
    const currentTab = tabs.find((e) => e.value === tab)
    if (currentTab?.value !== '') {
      initial.push({
        name: `${currentTab?.label}`,
      })
    }
    return initial
  }, [tab, tabs, name])

  return {
    crumbs,
    tab,
    id,
  }
}
