import { DataTableColumn } from '@/components/data-table/types'
import { AssociationBeneficiariesListRow } from '@/modules/program/interfaces/associations-list-row'

export const associationBeneficiariesListColumns: DataTableColumn<AssociationBeneficiariesListRow>[] =
  [
    {
      title: 'Association',
      accessor: 'name',
    },
    {
      title: 'Active',
      accessor: 'active',
    },
    {
      title: 'Date Availed',
      accessor: 'createdAt',
    },
  ]
