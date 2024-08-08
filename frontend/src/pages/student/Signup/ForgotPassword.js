import LogoHeader from "../../../components/student/Signup/LogoHeader";
import Content2 from "../../../components/student/Signup/Content2";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  return (
    <div className={styles.forgotPassword}>
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
      <Content2 />
    </div>
  );
};

export default ForgotPassword;
