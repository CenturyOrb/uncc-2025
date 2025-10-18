import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => { 
	<div>                           	
      	<nav>
        	<Link to="/">Logo</Link>
    	</nav>
      	<main>
      	 	<Outlet />
      	</main>
    </div>
}

export default MainLayout
