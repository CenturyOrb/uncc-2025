import React from 'react'
import styles from './pageinfo.module.css';

function PageInfo() {
  return (
    <div className={styles.info_container}>
        <h1>Sign in</h1>
        <input type="text"/>
    </div>
  )
}

export default PageInfo