import React, { useState, useEffect, useContext } from 'react';
import styles from './chatdisplay.module.css';

import axios from 'axios'
import { UserContext } from '../../App.jsx'

function ChatDisplay() {
	const { user, setUser, messages, setMessages } = useContext(UserContext);

	useEffect(() => { 
		async function fetchMessages() {
			try {
				const response = await axios.get(`https://reviewless-mallie-conchal.ngrok-free.dev/comment?user_id=${user.uid}`);
				const refactoredData = response.data
  					.map(({ from_user, ...rest }) => ({
  					  	isUser: from_user,
  					  	...rest
  				}))
  				.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
				setMessages(refactoredData);
			} catch (error) { console.error(error) }
		}
	
		fetchMessages();
	}, []);

  return (
	<div className={styles.chat_display_container}>
		{messages?.map((message, index) => (
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
