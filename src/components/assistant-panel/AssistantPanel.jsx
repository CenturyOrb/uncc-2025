import { useState } from 'react'
import styles from './assistantpanel.module.css'
import { motion } from "motion/react"

import { GrCheckboxSelected } from "react-icons/gr";
import { GrCheckbox } from "react-icons/gr";
import TaskContainer from '../task-container/TaskContainer.jsx'

const AssistantPanel = () => { 
	const [tasks, setTasks] = useState([
		{name: 'Learn HTML', 
		methods: ['Audio', 'Text'],
		status: GrCheckboxSelected
		}, 
		{name: 'Learn CSS', 
		methods: ['Text'],
		status: GrCheckbox
		}, 
		{name: 'Learn JS',
		methods: ['Text', 'Video'],
		status: GrCheckbox
		},
		{name: 'Learn React basics', 		
        methods: ['Text'],
		status: GrCheckbox
        }, 
		{name: 'First Reactjs Project!', 
        methods: ['Text'],
		status: GrCheckboxSelected
        },
		{name: 'Database?', 
        methods: ['Text'],
		status: GrCheckboxSelected
        },
		{name: 'Database?',       	
        methods: ['Text'],
        status: GrCheckboxSelected
		},
		{name: 'Database?', 
        methods: ['Text'],
        status: GrCheckboxSelected
		},
		{name: 'Database?',       		
	    methods: ['Text'],
        status: GrCheckboxSelected
		},
		{name: 'Database?',       		
        methods: ['Text'],
        status: GrCheckboxSelected
        }
	]);	

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
