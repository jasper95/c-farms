import debounce from 'lodash/debounce'
import { ChangeEvent, useCallback, useState } from 'react'

type InputChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | undefined
>
export interface UseSearchInterface {
  onSearchChanged: (event: InputChangeEvent) => void
  searchValue: string
}

export interface UseSearchProps {
  initialSearch: string
  delay?: number
}

export const useSearch = (props: UseSearchProps): UseSearchInterface => {
  const { initialSearch, delay = 1000 } = props
  const [searchValue, setSearchValue] = useState(initialSearch)
  const debounceSearch = useCallback(
    debounce((value: string) => {
      setSearchValue(value)
    }, delay),
    [setSearchValue, delay]
  )

  const onSearchChanged = useCallback((event: InputChangeEvent) => {
    event.persist()
    debounceSearch(event.currentTarget?.value)
  }, [])

  return {
    onSearchChanged,
    searchValue,
  }
}
