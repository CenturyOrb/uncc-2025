import { useState, useEffect, useContext } from 'react'
import styles from './learnlyprompt.module.css'
import { motion } from "motion/react"
import { MdLightbulbOutline } from "react-icons/md";
import axios from 'axios'

import { UserContext } from '../../App.jsx'

const LearnlyPrompt = () => { 
	const { user, setUser, messages, setMessages } = useContext(UserContext);
	const [promptInput, setPromptInput] = useState('');

	const handleSubmitEnter = async (e) => { 
		if (e.key === 'Enter') { 
			e.preventDefault();
			setPromptInput('');
			// send to AI
			
			
			// update database new user message
			const body = { 
				user_id: user.uid,
				content: promptInput,
				from_user: true
			}
			let response = await axios.post('https://reviewless-mallie-conchal.ngrok-free.dev/comment', body);
			
			// update the messages after
			response = await axios.get(`https://reviewless-mallie-conchal.ngrok-free.dev/comment?user_id=${user.uid}`);	
            const refactoredData = response.data
            	.map(({ from_user, ...rest }) => ({
            	  	isUser: from_user,
            	  	...rest
            }))
            .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
            setMessages(refactoredData);
		}
	}

	const handleSubmitButton = async (e) => {
        setPromptInput('');
        // send to AI
        	
        // update database new user message
        const body = { 
        	user_id: user.uid,
        	content: promptInput,
        	from_user: true
        }
        let response = await axios.post('https://reviewless-mallie-conchal.ngrok-free.dev/comment', body);
			
	 	response = await axios.get(`https://reviewless-mallie-conchal.ngrok-free.dev/comment?user_id=${user.uid}`);	
        const refactoredData = response.data
        	.map(({ from_user, ...rest }) => ({
        	  	isUser: from_user,
        	  	...rest
        }))
        .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        setMessages(refactoredData);
	}

	return(
		<div className={styles.prompt_container}>
			<textarea 
				className={styles.prompt_input} 
				rows={3}
				placeholder={'Stay growing, sail a new ocean.'}
				onChange={(e) => setPromptInput(e.target.value)}
				onKeyDown={(e) => handleSubmitEnter(e)}
				value={promptInput}
			/>
			<motion.button 
				whileHover={{ scale: 1.03 }}
  				whileTap={{ scale: 0.95 }}
				className={styles.learn_button}
				onClick={(e) => handleSubmitButton(e)}
			>
				<MdLightbulbOutline />
				Ask Learnly
			</motion.button>
		</div>
	);
}

export default LearnlyPrompt
