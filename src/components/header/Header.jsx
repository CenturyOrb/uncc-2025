import styles from './header.module.css';


function Header() {
  	return (
		<div className={styles.header_container}>
			<h1 style={{color: "orange"}}>LOGO</h1>
			<nav>
				<button>Hello</button>
				<button>Hello</button>
				<button>Hello</button>
			</nav>
		</div>
  	)
}

export default Header;
