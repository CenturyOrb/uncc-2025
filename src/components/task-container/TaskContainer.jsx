import styles from './taskcontainer.module.css'

const TaskContainer = ({task}) => {
	const color = task.complete ? styles.greenbar : styles.redbar;
	return (
		<div className={styles.task}>
			<div className={`${styles.bar} ${task.complete ? styles.green : styles.red}`}> 			
			</div>
			<div className={styles.task_info}>
				{task.task}
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
