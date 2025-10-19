import { useState, useContext } from 'react'
import styles from "./header.module.css";
import axios from 'axios'
import { Link, useNavigation, useNavigate } from "react-router-dom";
import { FaRocketchat } from "react-icons/fa";
import { FirebaeAuth } from '../../firebase/firebase-config.js'
import { 
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged	
 } from 'firebase/auth'

import Modal from '../modal/Modal.jsx'
import { UserContext } from '../../App.jsx'

const googleProvider = new GoogleAuthProvider();

function Header() {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();
	
	const handleLogin = async () => { 
		try {
			const gCredential = await signInWithPopup(FirebaeAuth, googleProvider);
			
			const response = await axios.get(`https://reviewless-mallie-conchal.ngrok-free.dev/users/${gCredential.user.uid}`);	
			navigate('/dashboard');
			setUser(gCredential.user);
		} catch (error) { console.error(error) }
	}

	const handleSignUp = async () => { 
    	try {
    		const gCredential = await signInWithPopup(FirebaeAuth, googleProvider);
    		const body = { 
    			auth_id: gCredential.user.uid,
    			user_name: gCredential.user.displayName
    		};
    		
    		const response = await axios.post(`https://reviewless-mallie-conchal.ngrok-free.dev/add-user`, body);	
    		navigate('/dashboard');
			setUser(gCredential.user);
    	} catch (error) { console.error(error) }
    }

  	return (
		<>
  	  <div className={styles.perspective}>
  	    <div className={styles.header_container}>
  	      <div className={styles.logo_container}>
  	        <FaRocketchat />
  	      </div>
  	      <nav>
  	     		<button
					onClick={handleLogin}
				>
					Sign In
				</button>
				<button                  		
                	onClick={handleSignUp}
                >
                	Sign Up
                </button>
  	      </nav>
  	    </div>
  	  </div>
			
		</>
  	);
}

export default Header;
