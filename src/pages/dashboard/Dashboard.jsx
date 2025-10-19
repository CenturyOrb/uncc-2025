import { Link } from 'react-router-dom'
import styles from './dashboard.module.css'
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";

import SideBar from '../../components/side-bar/SideBar.jsx'
import DashboardBody from '../../components/dashboard-body/DashboardBody.jsx'
import AssistantPanel from '../../components/assistant-panel/AssistantPanel.jsx'

const Dashboard = () => { 
	const style = {
		display: 'flex',
		flexDirection: 'row',
		height: '100vh'
  	};

	return(
	<section style={style}>
		<SideBar user={'Lewy'} navs={[
			{content: 'Dashboard', icon: LuLayoutDashboard}, 
			{content: 'Learn', icon: IoBookOutline}, 
			{content: 'Setting', icon: HiOutlineCog6Tooth},
		]}/>	
		<DashboardBody />
		<AssistantPanel />
	</section>
	);
}

export default Dashboard;
