import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state'
import FilterListIcon from '@mui/icons-material/FilterList'
import { FilterOptions } from './filter-options'
import { IFilter, IFilterValue } from '../data-table/table-reducer'

export interface ListFilterProps {
  filters: IFilter[]
  filterValues: IFilterValue[]
  setFilterValues(arg: IFilterValue[]): void
}
export default function ListFilter(props: ListFilterProps) {
  const { filters, filterValues, setFilterValues } = props

  return (
    <PopupState variant="popover" popupId="list-filter-popover">
      {(popupState) => (
        <>
          <Button {...bindTrigger(popupState)} startIcon={<FilterListIcon />}>
            Filter
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <FilterOptions
              onAddFilter={(filter) => {
                if (
                  !filterValues.find(
                    (e) =>
                      e.field === filter.field &&
                      e.type === filter.type &&
                      e.value === filter.value
                  )
                ) {
                  setFilterValues(filterValues.concat(filter))
                }
                popupState.close()
              }}
              filters={filters}
            />
          </Popover>
        </>
      )}
    </PopupState>
  )
}
