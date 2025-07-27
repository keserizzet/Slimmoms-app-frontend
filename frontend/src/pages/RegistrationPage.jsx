import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    // Burada registration API çağrısı yapılacak
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Header />
        <div className={styles.formContainer}>
          <h1 className={styles.title}>REGISTER</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Name *</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email *</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Password *</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.registerButton}>
                Register
              </button>
              <Link to="/login" className={styles.loginButton}>
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.decorativeElements}>
          <div className={styles.banana}></div>
          <div className={styles.strawberry}></div>
          <div className={styles.leaves}>
            <div className={styles.leaf}></div>
            <div className={styles.leaf}></div>
            <div className={styles.leaf}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
