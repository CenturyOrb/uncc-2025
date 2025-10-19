import { useState, useEffect, useContext } from 'react'
import styles from './userprofile.module.css'
import bob from '../../assets/bobross.jpeg'
import { FiArrowUp } from "react-icons/fi";

import axios from 'axios'
import { UserContext } from '../../App.jsx'

const UserProfile = () => { 
	const { user, setUser } = useContext(UserContext);
	const [userProfile, setUserProfile] = useState({
    	auth_id: 'ex',
    	user_name: "ex",
    	upvote_count: 0,
    	user_description: "ex"
	});

	useEffect(() => { 
		// call backend for user info /users/:id
		const fetchData = async () => {
      		try {
        		const response = await axios(`https://reviewless-mallie-conchal.ngrok-free.dev/users/${user.uid}`);
				setUserProfile(response.data.user);
    		} catch (error) {
    		    console.error('Error fetching data:', error);
    		}
    	};		

		fetchData();
	}, []);		
	
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
					{userProfile.user_name}<span style={{marginLeft: 'auto', fontSize: '1.1rem'}}>
					he/him</span>
				</p>
				<hr/>
				<div className={styles.user_body}>
					<p className={styles.user_info}>{userProfile.user_description}</p>
					<span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
						<FiArrowUp size={24}/>
						{userProfile.upvote_count}
					</span>
				</div>
			</div>
		</div>
	);
}

export default UserProfile
