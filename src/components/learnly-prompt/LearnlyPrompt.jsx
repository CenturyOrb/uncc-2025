import { useState } from 'react'
import styles from './learnlyprompt.module.css'
import { MdLightbulbOutline } from "react-icons/md";

const LearnlyPrompt = () => { 
	return(
		<div className={styles.prompt_container}>
			<textarea 
				className={styles.prompt_input} 
				rows={3}
				placeholder={'Stay growing, sail a new ocean.'}
			/>
			<button className={styles.learn_button}>
				<MdLightbulbOutline />
				Ask Learnly
			</button>
		</div>
	);
}

export default LearnlyPrompt
