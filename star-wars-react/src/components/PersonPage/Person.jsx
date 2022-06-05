import React, {Suspense}from 'react'
import styles from './Person.module.css'

import Loader from '../Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'

import { removePersonFromFavorites, setPersonToFavorites } from '../../redux/actions/actions'
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack'

const PersonFilms = React.lazy(() => import('./PersonFilms/PersonFilms'))

const Person = ({personData, personImage, id}) => {
  // debugger
  const storeData = useSelector(state => state.favorite )   
  const dispatch = useDispatch();
  
  const addToFav = () =>{     
    return dispatch(setPersonToFavorites({
        id: id,
        img: personImage,
        name: personData.name,
      }
      
    ));
  }
  const removeFromFav = () =>{

    return dispatch(removePersonFromFavorites(id));
  }

  function isFav() {
    for(let i = 0; i < storeData.length; i++) {
      if(storeData[i].id == id)
         return true;
    }
 
    return false;
 }


  return (
    <>
      <PersonLinkBack />
      {personData && <div className={styles.wrapper}>
          <div className={styles.main}>
            <h1>{personData.name}</h1>
            <img src={personImage} alt="" />
            {isFav() ? <button style={{color:'yellow'}} className={styles.favIco} onClick={removeFromFav}>
                ★
            </button>:
            <button className={styles.favIco} onClick={addToFav}>
                ☆
            </button>}
          </div>
          <ul className={styles.list}>
              <li>Height: <span>{personData.height}</span> </li>
              <li>Weight: <span>{personData.mass}</span> </li>
              <li>Hair color: <span>{personData.hair_color}</span> </li>
              <li>Eyes color: <span>{personData.eye_color}</span> </li>
              <li>Skin color: <span>{personData.skin_color}</span> </li>
              <li>Birth Year: <span>{personData.birth_year}</span> </li>
              <li>Gender: <span>{personData.gender}</span> </li>
          </ul>
            <Suspense  fallback={<Loader />}>
              <PersonFilms
                filmsUrl={personData.films}
              />
            </Suspense>
      </div>}
    </>
  )
}

export default Person