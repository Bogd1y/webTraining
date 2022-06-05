import React from 'react'
import {  NavLink } from 'react-router-dom'
import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = (props) => {
    console.log(props.counterPage);
  return (
    <h1 className={styles.buttonchikEnjoyer}>    
        {props.counterPage !==1  ? 
            <NavLink to={`/people/?page=${props.counterPage - 1}`}>
                <button className={styles.buttonchik} style={{cursor: 'pointer'}}> <span className={styles.spanL}>→</span> Prev page</button>
            </NavLink> : <button className={styles.buttonchik} style={{cursor: 'default'}}>First Page</button>
        }
        {props.counterPage === props.maxPages ? <button className={styles.buttonchik} style={{cursor: 'default'}}>Last Peoples</button> 
            : <NavLink to={`/people/?page=${props.counterPage + 1}`}>
                <button className={styles.buttonchik}style={{cursor: 'pointer'}}>
                    Next page  <span className={styles.spanR}>→</span>
                </button>
            </NavLink>
        }
    </h1>
  )
}

export default PeopleNavigation
// better disable button while it last but i like this way