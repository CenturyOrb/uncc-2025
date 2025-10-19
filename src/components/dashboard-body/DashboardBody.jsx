import { useState, useContext } from 'react'
import styles from './dashboardbody.module.css'
import { IoSearchOutline } from "react-icons/io5"

import UserProfile from '../user-profile/UserProfile.jsx'
import ActivityGrid from '../activity-grid/ActivityGrid.jsx'
import LearnlyPrompt from '../learnly-prompt/LearnlyPrompt.jsx'
import ChatDisplay from '../chat-display/ChatDisplay.jsx'
import MarkdownViewer from '../markdown-viewer/MarkdownViewer.jsx'

import { UserContext } from '../../App.jsx'

const DashboardBody = () => { 
	const [taskValue, setTaskValue] = useState('');
	const {learning, setLearning, slide} = useContext(UserContext);
	
	const render = learning
		? (
			<MarkdownViewer content={slide}/>	
		)	
		: (
		<>
			<div className={styles.task_container}>               			
            	<IoSearchOutline color='black' size={22}/>
            	<input 
            		className={styles.task_input} 
            		placeholder='Searching for a task?' 
            		onChange={(e) => setTaskValue(e.target.value)}
            		value={taskValue}
            	/>
            </div>	
			<section className={styles.section_1}>
            	<UserProfile />				
            	<ActivityGrid />
            </section>
            <ChatDisplay />
            <section style={{marginTop: 'auto'}}>
            	<LearnlyPrompt />
            </section>
		</>	);

	// ternary for showing which page
	return(
		<main className={styles.dashboard_body}>
			{render}
		</main>
	);
}

export default DashboardBody
