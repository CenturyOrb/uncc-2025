import { Link } from 'react-router-dom'
import styles from './dashboard.module.css'

import SideBar from '../../components/side-bar/SideBar.jsx'

const Dashboard = () => { 
	const style = {
		display: 'flex',
		flexDirection: 'row',
		height: '100vh',
  	};

	return(
	<section style={style}>
		<SideBar user={'Lewy'} navs={['ham', 'burgor']}/>	
	</section>
	);
}

export default Dashboard;
