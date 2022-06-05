import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
    let location = useLocation();

    return (
        <>
            <h2 >
                <br />
            </h2>
            <h1 className={styles.bigText}>
                <span className={styles.bigTextSpan}>404</span> <br />
                Not Found
            </h1>
            <p className={styles.paragraph}>
                {location.pathname === '/not-found' 
                    ? <span> Welcome to Not Found Page</span>
                    : <>No match to:{location.pathname}
                        </>
                }
                
            </p>

        </>
        
    )
}

export default NotFoundPage