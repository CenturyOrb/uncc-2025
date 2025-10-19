import { useState } from 'react'
import styles from './modal.module.css'

const Modal = ({children}) => { 
	const [showModal, setShowModal] = useState(false);
	
	return(
		<div 
			className={styles.modal}
			onClick={() => setSignUpModal(prevSignUpModal => !prevSignUpModal)}
		>
			<div 
				className={styles.modal_content}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);	
}

export default Modal
