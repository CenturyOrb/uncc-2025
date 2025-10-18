import { useState } from 'react'
import styles from './assistantpanel.module.css'

import { GrCheckboxSelected } from "react-icons/gr";
import { GrCheckbox } from "react-icons/gr";
import TaskContainer from '../task-container/TaskContainer.jsx'
import LearnlyPrompt from '../learnly-prompt/LearnlyPrompt.jsx'

const AssistantPanel = () => { 
	const [tasks, setTasks] = useState([
		{name: 'Learn HTML', 
		methods: ['Audio', 'Text'],
		status: GrCheckbox
		}, 
		{name: 'Learn CSS', 
		methods: ['Text'],
		status: GrCheckbox
		}, 
		{name: 'Learn JS',
		methods: ['Text', 'Video'],
		status: GrCheckboxSelected
		},
		{name: 'Learn React basics', 		
        methods: ['Text'],
		status: GrCheckboxSelected
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
		<aside className={styles.assistant_panel}>
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
		</aside>
	);
}

export default AssistantPanel
