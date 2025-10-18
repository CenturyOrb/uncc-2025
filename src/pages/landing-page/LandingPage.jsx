import { Link } from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard.jsx'

const LandingPage = () => { 
	return(
	<>
		<p>hello world</p>
		<Link to="/dashboard">Go to Dashboard</Link>
	</>
	);
}

export default LandingPage;
