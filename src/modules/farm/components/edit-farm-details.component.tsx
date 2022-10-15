import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useEditViewHook } from '@/lib/hooks/use-edit-view.hook'
import { useFarmDetailsQuery } from '../api/queries'
import { FarmForm } from './farm-form.component'
import { farmSchema } from '../constants'
import { useUpdateFarmMutation } from '../api/mutations'

export function EditFarmDetails() {
  const { formProps, onSave, isMutating } = useEditViewHook({
    useDetailsQueryHook: useFarmDetailsQuery,
    useMutationHook: useUpdateFarmMutation,
    name: 'Farm',
    schema: farmSchema,
  })

  return (
    <Card>
      <CardContent>
        <FarmForm
          onSave={onSave}
          isMutating={isMutating}
          formProps={formProps}
        />
      </CardContent>
    </Card>
  )
}
