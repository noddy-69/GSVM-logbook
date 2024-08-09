import LogoHeader from "../../../components/faculty/Signup/LogoHeader";
import styles from "./SignUp.module.css";
import SignupForm from "../../../components/faculty/Signup/FormFields";

const FacultySignUp = () => {
  return (
    <div className={styles.signUp}>
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
            <div className={styles.alreadyHaveAn}>Already have an account?</div>
            <a href="/login"><div className={styles.logIn}>Log In</div></a>
          </div>
        </div>
      </header>
      <section className={styles.signupForm}>
        <SignupForm />
      </section>
    </div>
  );
};

export default FacultySignUp;
