import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './PersonLinkBack.module.css'

const PersonLinkBack = () => {
    const navigate = useNavigate();

    const goBack=()=>{
        navigate(-1)
    }
  return (
    <>
        <button className={styles.linkBack} onClick={goBack}><span>🢔</span> Go back, it's a trap!</button>
    </>
  )
}

export default PersonLinkBack