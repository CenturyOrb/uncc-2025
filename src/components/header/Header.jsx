import { useState } from 'react'
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

const googleProvider = new GoogleAuthProvider();

function Header() {
	const navigate = useNavigate();
	
	const handleLogin = async () => { 
		try {
			const gCredential = await signInWithPopup(FirebaeAuth, googleProvider);
			const body = { 
				auth_id: gCredential.user.uid,
				user_name: gCredential.user.displayName
			};
			
			const response = await axios.post('https://reviewless-mallie-conchal.ngrok-free.dev/add-user', body);	
			if (gCredential.user.uid) {
				navigate('/dashboard');
			}
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
  	      </nav>
  	    </div>
  	  </div>
			
		</>
  	);
}

export default Header;
