import styles from "./Header.module.css";
import Logo from "../common/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserInfo from "../UserInfo/UserInfo";
import { useSelector } from "react-redux";

export default function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.right}>
        <Navigation />
        {isAuthenticated && <UserInfo />}
      </div>
    </header>
  );
}
