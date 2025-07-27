
import RegistrationForm from "../../auth/RegistrationForm/RegistrationForm";
import Background from "../../Background/index.jsx";
import Nav from '../../Navigation/HomeNav.jsx';
import style from "./index.module.css";

export default function RegistrationPage() {
  return (
    <div className={style.App}>
      <Background className={style.background}/>
      <Nav />
      <RegistrationForm />
    </div>
  );
}
