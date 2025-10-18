import styles from "./header.module.css";
import { Link, useNavigation } from "react-router-dom";

function Header() {
  return (
    <div className={styles.perspective}>
      <div className={styles.header_container}>
        <h1 style={{ color: "orange" }}>Learnly</h1>
        <nav>
          <Link to="/dashboard">
            <button>Go Landing Page</button>
          </Link>
          <Link to="/dashboard">
            <button>Go To Eric</button>
          </Link>
          <Link to="/dashboard">
            <button>Sign In</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
