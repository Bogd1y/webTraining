import React from 'react'
import styles from './SearchList.module.css'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData'
import { Link } from 'react-router-dom'

const SearchList = (props) => {
  return (
    <>
    {props.people.length ? (
            <ul className={styles.sItems}> 
                {props.people.map(item =>(
                    <Link to={`/people/${getPeopleId(item.url)}`} className={styles.sItem} key={getPeopleId(item.url)}>
                        <img src={getPeopleImage(getPeopleId(item.url))} alt="" />
                        <h2>{item.name}</h2>
                    </Link>
                ))

                }
            </ul>
        ):(
            <h2 className='header__text'>
                No results yet
            </h2>
        )
    }
    </>
  )
}

export default SearchList