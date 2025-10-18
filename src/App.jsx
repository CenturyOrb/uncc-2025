import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LandingPage from './pages/landing-page/LandingPage.jsx'

function App() {
  	return (
	<BrowserRouter>                                                 			
    	{/*this should be the header instead of this nav i think */}
      	<nav>
        	<Link to="/">Logo</Link>
	  	</nav>
	                                                                 
      	<Routes>
        	<Route path="/" element={<LandingPage />} />
      	</Routes>
    </BrowserRouter>

  	)
}

export default App
