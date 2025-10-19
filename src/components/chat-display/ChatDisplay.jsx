import React, { useState } from 'react';
import styles from './chatdisplay.module.css';

function ChatDisplay() {
  const [messages] = useState([
    { content: 'Message Content', isUser: true },
    { content: 'Message Content Chat', isUser: false },
    { content: 'Message Content', isUser: true },
    { content: 'Message Content Chat', isUser: false },
    { content: 'Message Content', isUser: true },
    { content: 'Message Content Chat', isUser: false },
    { content: 'Message Content', isUser: true },
    { content: 'Message Content Chat', isUser: false },
    { content: 'Message Content', isUser: true },
    { content: 'Message Content Chat', isUser: false },
    { content: 'Message Content', isUser: true },
    { content: 'Message Content Chat', isUser: false },
    { content: 'Message Content', isUser: true },
    { content: 'Message Content Chat', isUser: false },
    { content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed quasi, ad aut debitis, at obcaecati tempore, placeat libero adipisci temporibus nihil incidunt reiciendis. Inventore pariatur facere eius fuga sed!', isUser: true },
    { content: 'Message Content Chat', isUser: false },

  ]);

  return (
    <div className={styles.chat_display_container}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`${styles.message} ${
            message.isUser ? styles.user_message : styles.other_message
          }`}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
}

export default ChatDisplay;