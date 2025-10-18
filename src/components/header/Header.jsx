import styles from "./header.module.css";
import { Link, useNavigation } from "react-router-dom";
import { FaRocketchat } from "react-icons/fa";

function Header() {
  return (
    <div className={styles.perspective}>
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <FaRocketchat />
        </div>
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
