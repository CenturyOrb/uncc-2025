import styles from './taskcontainer.module.css'

const TaskContainer = ({task}) => {
	return (
		<div className={styles.task}>
			<div className={styles.bar}> 			
			</div>
			<div className={styles.task_info}>
				{task.name}
				<div className={styles.methods}>
					{task.methods.map((method, index) => 
						<p key={index}>{method}</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default TaskContainer
