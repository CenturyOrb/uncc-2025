import styles from './taskcontainer.module.css'

const TaskContainer = ({task}) => {
	return (
		<div className={styles.task}>
			<div className={styles.status}>
				{task.status && <task.status size={22} />}	
			</div>
			<div className={styles.divider}>
			</div>
			<div>
				{task.name}	
				<div className={styles.methods}>
					{task.methods.map((method, index) =>
						<button key={index}>
							{method}
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default TaskContainer
