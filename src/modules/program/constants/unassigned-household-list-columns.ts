import { DataTableColumn } from '@/components/data-table/types'
import { UnassignedHouseholdListRow } from '@/modules/program/interfaces/unassigned-household-list-row'

export const unassignedHouseholdListColumns: DataTableColumn<UnassignedHouseholdListRow>[] =
  [
    {
      title: 'Household',
      type: 'function',
      fn: (row) => [row.firstName, row.lastName].join(' '),
    },
    {
      title: 'Farm Size',
      type: 'function',
      fn: (row) => `${row.farmSize} ha`,
    },
    {
      title: 'Farming Income',
      type: 'function',
      fn: (row) => row.grossAnnualIncomeFarming ?? '',
    },
    {
      title: 'Non-farming Income',
      type: 'function',
      fn: (row) => row.grossAnnualIncomeNonfarming ?? '',
    },
    {
      title: 'Barangay',
      accessor: 'barangay',
    },
  ]
