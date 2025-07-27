import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const location = useLocation();
  
  return (
    <nav className={styles.nav}>
      <NavLink 
        to="/diary" 
        className={({ isActive }) => 
          `${styles.link} ${isActive ? styles.active : ''}`
        }
      >
        DIARY
      </NavLink>
      <NavLink 
        to="/calculator" 
        className={({ isActive }) => 
          `${styles.link} ${isActive ? styles.active : ''}`
        }
      >
        CALCULATOR
      </NavLink>
    </nav>
  );
}
