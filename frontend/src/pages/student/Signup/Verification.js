import Content3 from "../../../components/student/Signup/Content3";
import styles from "./Verification.module.css";

const Verification = () => {
  return (
    <div className={styles.verification}>
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.logo}>
          <div className={styles.logoChild} />
          <img
            className={styles.untitledDesign11Icon}
            loading="lazy"
            alt=""
            src="/untitleddesign1-11@2x.png"
          />
        </div>
        <div className={styles.pageTitle}>
          <b className={styles.heading}>G.S.V.M. Medical College, Kanpur</b>
        </div>
        <div className={styles.signUp}>
          <div className={styles.signUpCall}>
            <div className={styles.dontHaveAn}>Don't have an account?</div>
            <a href="/"><div className={styles.logIn}>Sign Up</div></a>
          </div>
        </div>
      </header>
      <Content3 />
    </div>
  );
};

export default Verification;
