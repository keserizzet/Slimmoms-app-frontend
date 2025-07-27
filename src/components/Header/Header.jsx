import styles from "./Header.module.css";
import Logo from "../common/Logo/Logo";
import Navigation from "../../../../../Downloads/Slimmoms-app-frontend-accb5b6e993e958504de6365daca68b313fd499d/frontend/src/components/Navigation/Navigation.jsx";
import UserInfo from "../../../../../Downloads/Slimmoms-app-frontend-accb5b6e993e958504de6365daca68b313fd499d/frontend/src/components/UserInfo/UserInfo.jsx";
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
