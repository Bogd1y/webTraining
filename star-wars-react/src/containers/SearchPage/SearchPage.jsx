import React, { useEffect, useState } from 'react'
import { API_SEARCH } from '../../constants/api';
import {getApiData} from '../../utils/network'
import SearchList from '../../components/SearchList/SearchList';
import styles from './SearchPage.module.css'

// debugger
const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const [peopleData, setPeopleData] = useState([]);


  const getSearch = async (text) =>{
    const res = await getApiData(API_SEARCH+text)
    return res.results
  }
  const clearSearch =() =>{
    setSearchText('')
  }
  
  
  useEffect(()=>{
    (async () => 
      setPeopleData( await getSearch(searchText))
    )()
  },[searchText])



  return (
    <div style={{textAlign: 'center'}}>
        <h1 className='header__text'>Search</h1>
        <input type="text" style={{borderRadius: "5px"}} 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            
        />

        <button onClick={clearSearch} className={styles.clearSearch}>
          <span></span>
          <span></span>
        </button>
        {searchText ?( 
          <SearchList 
            people={peopleData}
          /> ) : (
              <h2  className='header__text' style={{fontSize: '16px'}}>Waiting for Search</h2>
          )
        }
    </div>
  )
}

export default SearchPage