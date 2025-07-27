import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";
import logoImg from "../../../../../../Downloads/Slimmoms-app-frontend-accb5b6e993e958504de6365daca68b313fd499d/frontend/src/assets/logo.png"; // logo.png dosyasını src/assets içine kopyala

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div className={styles.logo} onClick={() => navigate("/")}>
      <img src={logoImg} alt="SlimMom Logo" className={styles.logoImg} />
    </div>
  );
}
