import React from 'react'
import styles from './chat-box.module.css';

function ChatBox() {
  return (
    <div className={styles.info_container}>
        <h1>Chat With Us</h1>
        <input type="text" id='test'/>
    </div>
  )
}

export default ChatBox