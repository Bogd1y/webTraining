import React from 'react'
import { Link } from 'react-router-dom';
import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => {
// debugger

  return (
      <ul className={styles.list__container}>
          {people.map((item) => 
              <li className={styles.list__item} key={item.id}>
                  <Link to={`/people/${item.id}`}>
                      <img className={styles.person__photo} src={item.img} alt={item.name} />
                      <p>{item.name}</p>
                  </Link>
              </li>
          )}
      </ul> 
  )
}

export default PeopleList;