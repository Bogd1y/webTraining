import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css';
import Logo from './Logo/Logo';

const Header = () => {

    const countOfFav = useSelector(state => state.favorite)

  return (
      <div className={styles.container}>
        <Logo />
        <ul className={styles.list__container}>
            <li>
                <NavLink to='/'> HOME</NavLink>
            </li>
            <li>
                <NavLink to='/people/?page=1'> People</NavLink>
            </li>
            <li>
                <NavLink to='/search'>Search</NavLink>
            </li>
            <li>
                <NavLink to='/not-found'> Not-Found</NavLink>
            </li>
            <li>
                <NavLink to='/fail'> Fail</NavLink>
            </li>
        </ul>
        <div>
            <NavLink className={styles.favorites} to='/favorites'>
                ★
                <span>{countOfFav.length}</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Header