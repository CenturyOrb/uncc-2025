import { Link } from 'react-router-dom';
import { useState, useEffect, useContext} from 'react'
import styles from './sidebar.module.css'
import { motion } from "motion/react"
import { GoPerson } from "react-icons/go";

import axios from 'axios'
import { UserContext } from '../../App.jsx'

const SideBar = ({navs}) => {
	const [navData, setNavData] = useState(
		navs.map((nav, index) => ({content: nav.content, highlighted: index === 0, icon: nav.icon}))
	);

	const { user, setUser, learning, setLearning } = useContext(UserContext);
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

    
	const handleClick = (clickedIndex) => {
  		setNavData(prevNavData =>
    		prevNavData.map((data, index) => ({
      			...data,
      			highlighted: index === clickedIndex
    		}))
  		);
		// switch out items in the dashboard main	
		if (clickedIndex === 1) { 
			setLearning(true);	
		} else (setLearning(false));
	};

	return(
	<section className={styles.side_bar}>
		<div>
		<h1 className={styles.name}>Learnly</h1>
		<ul className={styles.nav}>
			{navData.map((data, index) =>
				<motion.li className={`${styles.nav_button} ${data.highlighted ? styles.highlighted : ''}`} 
					whileHover={{ scale: 1.03 }}
  					whileTap={{ scale: 0.95 }}
					key={index}
					onClick={() => handleClick(index)}
				>
					{data.icon && <data.icon size={22} style={{marginRight: '0.5rem'}}/>}
					{data.content}
				</motion.li>
			)}
		</ul>
		</div>
		<div className={`${styles.user_info} ${styles.highlighted}`}>
			<GoPerson size={22}/>
			{userProfile.user_name}
		</div>
	</section>
	);
}

export default SideBar
