import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PeopleList from '../../components/PeoplePage/PeopleList';
import styles from './Favorites.module.css'

const Favorites = () => {
  const storeData = useSelector(store => store.favorite)
  console.log(storeData);
    if (storeData.length === 0) { 
      return <>
        <h1 className={styles.textM} >No favorites yet </h1>
        <Link className={styles.textL} to='/'> Go Home</Link>
      </>

    } 
  return (
    <>
      <h1 className={styles.textM}>Favorites </h1>
      <div className={styles.conta}>
        <PeopleList
          people={storeData}
        />
      </div>
    </>
  )
}

export default Favorites