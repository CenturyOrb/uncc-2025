import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LandingPage from './pages/landing-page/LandingPage.jsx'
import LovePage from './pages/love-page/LovePage.jsx';

function App() {
  	return (
	<BrowserRouter>                                                 			
    	{/*this should be the header instead of this nav i think */}
      	<nav>
        	<Link to="/">Logo</Link>
			<Link to="/love">Hello</Link>
	  	</nav>
	                                                                 
      	<Routes>
        	<Route path="/" element={<LandingPage />} />
        	<Route path="/love" element={<LovePage />} />
      	</Routes>
    </BrowserRouter>

  	)
}

export default App
