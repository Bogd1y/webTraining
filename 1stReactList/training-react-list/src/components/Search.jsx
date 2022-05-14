import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">
            <FaSearch />
        </label>
        <input 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            type='text' 
            id='search'    
            role='searchbox'
            placeholder='Search items'
        />
    </form>
  )
}

export default Search