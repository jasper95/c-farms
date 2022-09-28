import { useForm } from 'react-hook-form'
import { PROGRAM_SCHEMA } from '@/modules/program/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCreateProgramMutation } from '../api/mutations'

export function useProgramNew() {
  const [newProgramResponse, onCreate] = useCreateProgramMutation()
  const programFormProps = useForm({
    defaultValues: PROGRAM_SCHEMA.cast({}),
    resolver: yupResolver(PROGRAM_SCHEMA, { abortEarly: false }),
  })

  function onSave() {
    programFormProps.handleSubmit((data) => {
      const { dateRange, ...restData } = data
      onCreate({
        object: {
          dateEnd: data.dateRange[0],
          dateStart: data.dateRange[1],
          ...restData,
        },
      })
    })()
  }

  return {
    programFormProps,
    newProgramResponse,
    onSave,
  }
}