import React from "react";
import styles from './title.module.css';

function title() {
  return (
    <div className={styles.title_container}>
      <h1 style={{ fontSize: "5rem" }} className={styles.main_title}>
        Learnly
      </h1>
      <h3 className={styles.main_subtitle}>Helping you to reach higher goals</h3>
    </div>
  );
}

export default title;
