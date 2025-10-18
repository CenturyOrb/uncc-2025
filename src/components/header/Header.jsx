import styles from './header.module.css';
import { Link } from 'react-router-dom';


function Header() {
  	return (
		<div className={styles.header_container}>
			<h1 style={{color: "orange"}}>LOGO</h1>
			<nav>
				<Link to="/dashboard"><button>Go Landing Page</button></Link>
				<button>Hello</button>
				<button>Hello</button>
			</nav>
		</div>
  	)
}

export default Header;
