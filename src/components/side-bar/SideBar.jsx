import { useState } from 'react'
import styles from './sidebar.module.css'
import { motion } from "motion/react"
import { CgProfile } from "react-icons/cg"

const SideBar = ({navs, user}) => {
	const [navData, setNavData] = useState(
		navs.map((nav, index) => ({content: nav, highlighted: index === 0}))
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
					{data.content}
				</motion.li>
			)}
		</ul>
		</div>
		<div className={`${styles.user_info} ${styles.highlighted}`}>
			<CgProfile size={22}/>
			{user}
		</div>
	</section>
	);
}

export default SideBar
