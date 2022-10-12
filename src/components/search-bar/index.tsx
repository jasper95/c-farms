import React from 'react'
import Card from '@mui/material/Card'
import InputBase, { InputBaseProps } from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export type ISearchBarProps = {
  onChange: InputBaseProps['onChange']
}

export default function SearchBar(props: ISearchBarProps) {
  return (
    <Card className="py-2 px-3 flex justify-between">
      <InputBase
        className="flex-1"
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={props.onChange}
      />
      <IconButton
        type="submit"
        className="p-2.5"
        aria-label="search"
        size="large"
      >
        <SearchIcon />
      </IconButton>
    </Card>
  )
}
