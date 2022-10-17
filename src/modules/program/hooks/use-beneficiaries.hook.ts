import { useRouter } from 'next/router'
import { useProgramDetailsQuery } from '@/modules/program/api/queries'
import { ProgramTypeEnum } from '@/modules/program/enums/program-type.enum'

export function useBeneficiaries() {
  const router = useRouter()
  const [response] = useProgramDetailsQuery({
    variables: {
      id: router.query.id,
    },
  })
  const type = response?.data?.details?.type as ProgramTypeEnum
  return {
    type,
  }
}
