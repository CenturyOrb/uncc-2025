import { useState } from 'react'
import styles from './assistantpanel.module.css'
import { motion } from "motion/react"

import { GrCheckboxSelected } from "react-icons/gr";
import { GrCheckbox } from "react-icons/gr";
import TaskContainer from '../task-container/TaskContainer.jsx'
import LearnlyPrompt from '../learnly-prompt/LearnlyPrompt.jsx'

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
        }
	]);	

	return(
		<motion.aside 	
			initial={{ x: '100%' }}
      		animate={{ x: 0 }}
      		transition={{type: 'spring', stiffness: 50}}
			className={styles.assistant_panel}
		>
			<div className={styles.task_list}>
				<h1>Tasks</h1>
				<hr/>
				<div className={styles.tasks}>
					{tasks.map((task, index) => 
						(<TaskContainer 
							key={index} 
							task={task}
						/>)
					)}
				</div>
			</div>
			<LearnlyPrompt />
		</motion.aside>
	);
}

export default AssistantPanel
