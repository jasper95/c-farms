import Breadcrumbs from '@/components/breadcrumbs'
import { Dashboard } from '@/components/layout/dashboard.layout'
import { useNewViewHook } from '@/lib/hooks/use-new-view.hook'
import { useCreateFarmMutation } from '@/modules/farm/api/mutations'
import { FarmForm } from '@/modules/farm/components'
import { farmSchema } from '@/modules/farm/constants'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import { useRouter } from 'next/router'

export function FarmNewView() {
  const router = useRouter()
  const { formProps, onSave, isMutating } = useNewViewHook({
    schema: farmSchema,
    useMutationHook: useCreateFarmMutation,
    name: 'Farm',
    initialValues: router.query,
    redirectBaseUrl: '/farm',
  })
  return (
    <Dashboard>
      <Breadcrumbs crumbs={[{ name: 'Farm' }, { name: 'New Farm' }]} />
      <Card>
        <CardContent>
          <FarmForm
            isMutating={isMutating}
            onSave={onSave}
            formProps={formProps}
          />
        </CardContent>
      </Card>
    </Dashboard>
  )
}
