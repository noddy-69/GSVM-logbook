import LogoHeader from "../../../components/student/Signup/LogoHeader";
import LoginForm from "../../../components/student/Signup/Content";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <header className={styles.logoHeader}>
        <div className={styles.logoHeaderChild} />
        <div className={styles.logo}>
          <div className={styles.logoChild} />
          <img
            className={styles.untitledDesign11Icon}
            loading="lazy"
            alt=""
            src="/untitleddesign1-1@2x.png"
          />
        </div>
        <div className={styles.headingWrapper}>
          <h3 className={styles.heading}>G.S.V.M. Medical College, Kanpur</h3>
        </div>
        <div className={styles.loginLink}>
          <div className={styles.alreadyHaveAnAccountParent}>
            <div className={styles.alreadyHaveAn}>Don't have an account?</div>
            <a href="/"><div className={styles.logIn}>Sign Up</div></a>
          </div>
        </div>
      </header>
      <LoginForm />
    </div>
  );
};

export default Login;
