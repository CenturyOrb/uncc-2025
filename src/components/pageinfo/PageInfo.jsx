import React from 'react'
import styles from './pageinfo.module.css';

function PageInfo() {
  return (
    <div className={styles.info_container}>
        <h1>Sign In With Google</h1>
        <input type="text"/>
        <input type="text"/>
        <button>Sign In</button>
    </div>
  )
}

export default PageInfo