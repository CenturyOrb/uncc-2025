import { useState, useEffect, useContext} from 'react'
import styles from './assistantpanel.module.css'
import { motion } from "motion/react"

import { GrCheckboxSelected } from "react-icons/gr";
import { GrCheckbox } from "react-icons/gr";
import TaskContainer from '../task-container/TaskContainer.jsx'

import axios from 'axios'
import { UserContext } from '../../App.jsx'

const AssistantPanel = () => { 
	const [tasks, setTasks] = useState([]);	
	const { user } = useContext(UserContext);

	useEffect(() => { 
		console.log(tasks);
	}, [tasks]);

	useEffect(() => {                                                                                              	
    	// call backend for user info /tasks/:id
    	const fetchData = async () => {
      		try {
        		const response = await axios(`https://reviewless-mallie-conchal.ngrok-free.dev/tasks?user_id=${user.uid}`);
				const newTasks = response.data.map(item => {
					const methods = [];
				  	if (item.method_text) methods.push('text');
				  	if (item.method_audio) methods.push('audio');
				  	if (item.method_video) methods.push('video');
				
				  	return {
				  	  task: item.task,
				  	  methods: methods,
					  complete: item.complete,
				  	};
				});

				setTasks(newTasks);	
    		} catch (error) {
    		    console.error('Error fetching data:', error);
    		}
    	};		

    	fetchData();
    }, []);		

	const week_display = [
		{day: 'Sun', date: 19},
		{day: 'Mon', date: 20},
		{day: 'Tue', date: 21},
		{day: 'Wed', date: 22},
		{day: 'Thu', date: 23},
		{day: 'Fri', date: 24},
		{day: 'Sat', date: 25},
	];

	return(
		<motion.aside 	
			initial={{ x: '100%' }}
      		animate={{ x: 0 }}
      		transition={{type: 'spring', stiffness: 50}}
			className={styles.assistant_panel}
		>
			<h1 style={{fontSize: '1.5rem'}}>Learning Tasks</h1>
			<hr/>
			{/* week display */}
			<div className={styles.week}> 
				{week_display.map((dayObj, index) => 
					<div key={index}>
						<p style={{textAlign: 'center', marginBottom: '0.5rem'}}>{dayObj.day}</p>
						<p style={{textAlign: 'center'}}>{dayObj.date}</p>
					</div>
				)}				
			</div>
			
			{/* task list */}
			<div className={styles.task_list}>
				{tasks.map((task, index) => 
					<TaskContainer task={task} key={index}/>
				)}
			</div>
	
			{/* learnly prompt */}
		</motion.aside>
	);
}

export default AssistantPanel
