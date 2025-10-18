import { useState } from 'react'
import styles from './dashboardbody.module.css'
import { IoSearchOutline } from "react-icons/io5";

import UserProfile from '../user-profile/UserProfile.jsx'
import ActivityGrid from '../activity-grid/ActivityGrid.jsx'

const DashboardBody = () => { 
	const [taskValue, setTaskValue] = useState('');
	
	return(
		<main className={styles.dashboard_body}>
			{/* Task search bar */}
			<div className={styles.task_container}>
				<IoSearchOutline color='black' size={22}/>
				<input 
					className={styles.task_input} 
					placeholder='Searching for a task?' 
					onChange={(e) => setTaskValue(e.target.value)}
					value={taskValue}
				/>
			</div>	
			
			{/* First section */}
			<section className={styles.section_1}>
				<UserProfile />				
				{/* add github activity grid thingie here */}
				<ActivityGrid />
			</section>
		</main>
	);
}

export default DashboardBody
