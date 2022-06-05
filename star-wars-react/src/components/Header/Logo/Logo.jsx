import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Logo.module.css'
import darkThemeLogo from '../../../assets/Logo/space-station.svg'
import defaultThemeLogo from '../../../assets/Logo/droid.svg'
import lightThemeLogo from '../../../assets/Logo/lightsaber.svg'

const Logo = () => {

    let theme = useSelector(store => store.theme)

    if (theme == 'defaultTheme') return (
        <div>
            <img className={styles.logotipchik} src={defaultThemeLogo} alt="" />
        </div>
    )
    if (theme == 'darkTheme' ) return (
        <div>
            <img className={styles.logotipchik} src={darkThemeLogo} alt="" />
        </div>
    )
    if (theme == 'lightTheme' ) return (
        <div>
            <img className={styles.logotipchik} src={lightThemeLogo} alt="" />
        </div>
    )

        return (
            <div>
                LOGO
            </div>

        )
}

export default Logo