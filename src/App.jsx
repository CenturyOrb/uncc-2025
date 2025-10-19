import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import NoLayout from './NoLayout';

import LandingPage from './pages/landing-page/LandingPage';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './components/header/Header';

export const UserContext = createContext();

function App() {
	const [user, setUser] = useState(null);
	const [messages, setMessages] = useState([]);
	const [learning, setLearning] = useState(false);
	const [slide, setSlide] = useState('');
	
  	return (
		<UserContext.Provider value={{user, setUser, messages, setMessages, learning, setLearning, slide, setSlide}}> 
		<BrowserRouter>
    	  	<Routes>
    	    	<Route element={<NoLayout />}>
    	      		<Route path="/" element={<LandingPage />} />
					<Route path="/dashboard" element={<Dashboard />} />
    	    	</Route>
			</Routes>
    	</BrowserRouter>		
		</UserContext.Provider >
  	);
}

export default App
