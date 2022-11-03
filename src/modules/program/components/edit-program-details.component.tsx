import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useEditViewHook } from '@/lib/hooks/use-edit-view.hook'
import ProgramForm from './program-form.component'
import { programSchema } from '@/modules/program/constants'
import { useProgramDetailsQuery } from '@/modules/program/api/queries'
import { useUpdateProgramMutation } from '@/modules/program/api/mutations'
import { FormToolbar } from '@/components/form-toolbar'
import { withAuthorization } from '@/lib/hocs/with-authorization'
import { PermissionEnum } from '@/modules/common/authorization/enums/permission.enum'
import { ResourceEnum } from '@/modules/common/authorization/enums/resource.enum'
import { PageProps } from '@/modules/common/interfaces/page-props.interface'

function View() {
  const { formProps, formDisabled, onSave, isMutating } = useEditViewHook({
    schema: programSchema,
    useDetailsQueryHook: useProgramDetailsQuery,
    useMutationHook: useUpdateProgramMutation,
    name: ResourceEnum.Program,
    transform: ({ dateRange, ...a }) => ({
      ...a,
      dateStart: dateRange[0],
      dateEnd: dateRange[1],
    }),
    transformResponse: ({ dateStart, dateEnd, ...restProps }) =>
      programSchema.noUnknown().cast({
        dateRange: [new Date(dateStart), new Date(dateEnd)],
        ...restProps,
      }),
  })

  return (
    <Card>
      <CardContent>
        <ProgramForm formProps={formProps} formDisabled={formDisabled} />
        <FormToolbar
          cancelVisible={false}
          onConfirm={onSave}
          confirmLabel="Save"
          isLoading={isMutating}
          confirmDisabled={formDisabled}
        />
      </CardContent>
    </Card>
  )
}

export const EditProgramDetails: PageProps = withAuthorization({
  permission: PermissionEnum.Read,
  resource: ResourceEnum.Program,
})(View)
