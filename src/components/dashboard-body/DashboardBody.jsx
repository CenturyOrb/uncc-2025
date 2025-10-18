import { useState } from 'react'
import styles from './dashboardbody.module.css'
import { IoSearchOutline } from "react-icons/io5";

const DashboardBody = () => { 
	const [taskValue, setTaskValue] = useState('');
	
	return(
		<main className={styles.dashboard_body}>
			<div className={styles.task_container}>
				<IoSearchOutline color='black' size={22}/>
				<input 
					className={styles.task_input} 
					placeholder='Searching for a task?' 
					onChange={(e) => setTaskValue(e.target.value)}
					value={taskValue}
				/>
			</div>	
		</main>
	);
}

export default DashboardBody
