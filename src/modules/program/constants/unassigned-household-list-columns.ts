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
      title: 'Farm Size (ha)',
      type: 'function',
      fn: (row) => `${row.farmSize ?? '0'} ha`,
      sortable: true,
    },
    {
      title: 'Farming Income',
      type: 'function',
      fn: (row) =>
        row.grossAnnualIncomeFarming
          ? parseFloat(row.grossAnnualIncomeFarming)
              .toFixed(2)
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
          : '',
    },
    {
      title: 'Non-farming Income',
      type: 'function',
      fn: (row) =>
        row.grossAnnualIncomeNonfarming
          ? parseFloat(row.grossAnnualIncomeNonfarming)
              .toFixed(2)
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
          : '',
    },
    {
      title: 'Barangay',
      accessor: 'barangay',
    },
    {
      title: 'Commodities',
      type: 'function',
      fn: (row) => (row.commodities ? row.commodities.join(', ') : ''),
    },
    {
      title: 'Main Livelihood',
      type: 'function',
      fn: (row) => (row.mainLivelihood ? row.mainLivelihood.join(', ') : ''),
    },
  ]
