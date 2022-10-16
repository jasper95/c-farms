import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useEditViewHook } from '@/lib/hooks/use-edit-view.hook'
import ProgramForm from './program-form.component'
import { programSchema } from '../constants'
import { useProgramDetailsQuery } from '../api/queries'
import { useUpdateProgramMutation } from '../api/mutations'
import { FormToolbar } from '@/components/form-toolbar'

export function EditProgramDetails() {
  const { formProps, onSave, isMutating } = useEditViewHook({
    schema: programSchema,
    useDetailsQueryHook: useProgramDetailsQuery,
    useMutationHook: useUpdateProgramMutation,
    name: 'Program',
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
        <ProgramForm formProps={formProps} />
        <FormToolbar
          cancelVisible={false}
          onConfirm={onSave}
          confirmLabel="Save"
          isLoading={isMutating}
        />
      </CardContent>
    </Card>
  )
}
