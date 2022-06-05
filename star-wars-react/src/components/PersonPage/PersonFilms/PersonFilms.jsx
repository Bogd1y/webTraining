import React, {useEffect, useState} from 'react'
import { makeConcurrentReq } from '../../../utils/network'
import styles from './PersonFilms.module.css';

const PersonFilms = ({filmsUrl}) => {
    const [films, setFilms] = useState([])
    
    useEffect(()=> {
        (async()=>{
            const resFilms = await makeConcurrentReq(filmsUrl)
            setFilms(resFilms)
            console.log(resFilms);
        })();
    },[])

  return (
    <ul className={styles.list}>
    {films
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(film => (
            <li key={film.episode_id}>
                <span>Episode {film.episode_id}:</span>
                <span>{film.title}</span>
            </li>
        ))}
    </ul>
  )
}

export default PersonFilms