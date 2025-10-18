import styles from './userprofile.module.css'
import bob from '../../assets/bobross.jpeg'
import { FiArrowUp } from "react-icons/fi";

const UserProfile = () => { 
	return(
		<div className={styles.user_profile}>
			<img 
				src={bob} 
				className={styles.user_img}
			/>
			<div className={styles.lala}> 
				<p 
					style={{display: 'flex', alignItems: 'center'}}
					className={styles.story}
				>
					Bobby Rossy <span style={{marginLeft: 'auto', fontSize: '1.1rem'}}>
					he/him</span>
				</p>
				<hr/>
				<div className={styles.user_body}>
					<p className={styles.user_info}>hello goobers </p>
					<span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
						<FiArrowUp size={24}/>
						4858
					</span>
				</div>
			</div>
		</div>
	);
}

export default UserProfile
