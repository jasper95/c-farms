import Breadcrumbs from '@/components/breadcrumbs'
import { FormToolbar } from '@/components/form-toolbar'
import { Dashboard } from '@/components/layout/dashboard.layout'
import { useNewViewHook } from '@/lib/hooks/use-new-view.hook'
import { useCreateFarmMutation } from '@/modules/farm/api/mutations'
import { FarmForm } from '@/modules/farm/components'
import { farmSchema } from '@/modules/farm/constants'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'

export function FarmNewView() {
  const { formProps, onSave, isMutating } = useNewViewHook({
    schema: farmSchema,
    useMutationHook: useCreateFarmMutation,
    name: 'Farm',
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
