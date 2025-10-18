import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import NoLayout from './NoLayout';

import LandingPage from './pages/landing-page/LandingPage';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './components/header/Header';

function App() {
  	return (
	<BrowserRouter>
      	<Routes>
        	<Route element={<NoLayout />}>
          		<Route path="/" element={<LandingPage />} />
				<Route path="/dashboard" element={<Dashboard />} />
        	</Route>
		</Routes>
    </BrowserRouter>		
  	)
}

export default App
