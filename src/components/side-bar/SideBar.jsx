import { useState } from 'react'
import styles from './sidebar.module.css'
import { motion } from "motion/react"
import { GoPerson } from "react-icons/go";

const SideBar = ({navs, user}) => {
	const [navData, setNavData] = useState(
		navs.map((nav, index) => ({content: nav.content, highlighted: index === 0, icon: nav.icon}))
	);
	
	const handleClick = (index) => { 
		setNavData(prevNavData => prevNavData.map(data => {
			return {...data, highlighted: !data.highlighted }
		}))
	}

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
			{user}
		</div>
	</section>
	);
}

export default SideBar
