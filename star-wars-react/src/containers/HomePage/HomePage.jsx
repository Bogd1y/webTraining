import React from 'react'
import { useDispatch } from 'react-redux'
import { changeThemeToDark, changeThemeToDefault, changeThemeToLight } from '../../redux/actions/actions'
import styles from './HomePage.module.css'
import lightSide from '../../assets/Side/light-side.jpg'
import darkSide from '../../assets/Side/dark-side.jpg'
import soloSide from '../../assets/Side/falcon.jpg'

const HomePage = () => {
  const dispatch = useDispatch()

  const changeThemeDark =() =>{
    return dispatch(changeThemeToDark())
  }
  const changeThemeLight =() =>{
    return dispatch(changeThemeToLight())
  }
  const changeThemeDefault =() =>{
    return dispatch(changeThemeToDefault())
  }

  return (
    <>
      <h1 className="header__text">Home Page</h1>
      <ul className={styles.themeList}>
        <li className={styles.lightItem}>
          <button onClick={changeThemeLight}>
            <img src={lightSide} alt="" />
             Light Side
             </button>
        </li>
        <li className={styles.darkItem}>
            <button onClick={changeThemeDark}> 
              <img src={darkSide} alt="" />
              Dark Side
            </button>
          
        </li>
        <li className={styles.soloItem}>
          <button onClick={changeThemeDefault}>
            <img src={soloSide} alt="" />
            Solo side 
            </button>
        </li>
      </ul>
    </>
  )
}

export default HomePage;