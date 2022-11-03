import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useEditViewHook } from '@/lib/hooks/use-edit-view.hook'
import { useFarmDetailsQuery } from '../api/queries'
import { FarmForm } from './farm-form.component'
import { farmSchema } from '../constants'
import { useUpdateFarmMutation } from '../api/mutations'
import { withAuthorization } from '@/lib/hocs/with-authorization'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'
import { FormToolbar } from '@/components/form-toolbar'

function View() {
  const { formProps, formDisabled, onSave, isMutating } = useEditViewHook({
    useDetailsQueryHook: useFarmDetailsQuery,
    useMutationHook: useUpdateFarmMutation,
    name: ResourceEnum.Farm,
    schema: farmSchema,
  })

  return (
    <Card>
      <CardContent>
        <FarmForm
          onSave={onSave}
          isMutating={isMutating}
          formProps={formProps}
          formDisabled={formDisabled}
        />
      </CardContent>
    </Card>
  )
}

export const EditFarmDetails: PageProps = withAuthorization({
  permission: PermissionEnum.Read,
  resource: ResourceEnum.Farm,
})(View)
