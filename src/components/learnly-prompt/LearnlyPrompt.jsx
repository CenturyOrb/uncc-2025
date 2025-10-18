import { useState } from 'react'
import styles from './learnlyprompt.module.css'
import { motion } from "motion/react"
import { MdLightbulbOutline } from "react-icons/md";

const LearnlyPrompt = () => { 
	return(
		<div 
			className={styles.prompt_container}
		>
			<textarea 
				className={styles.prompt_input} 
				rows={3}
				placeholder={'Stay growing, sail a new ocean.'}
			/>
			<motion.button 
				whileHover={{ scale: 1.03 }}
  				whileTap={{ scale: 0.95 }}
				className={styles.learn_button}
			>
				<MdLightbulbOutline />
				Ask Learnly
			</motion.button>
		</div>
	);
}

export default LearnlyPrompt
