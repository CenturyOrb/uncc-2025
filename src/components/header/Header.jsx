import { useState } from 'react'
import styles from "./header.module.css";
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
