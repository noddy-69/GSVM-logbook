import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.logo}>
        <div className={styles.logoChild} />
        <img
          className={styles.untitledDesign11Icon}
          loading="lazy"
          alt=""
          src="/untitleddesign1-1@2x.png"
        />
      </div>
      <div className={styles.mainHeading}>
        <h3 className={styles.heading}>G.S.V.M. Medical College, Kanpur</h3>
      </div>
      <div className={styles.signUpLinkWrapper}>
        <div className={styles.signUpLink}>
          <div className={styles.dontHaveAn}>Don't have an account?</div>
          <div className={styles.signUp}>Sign Up</div>
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
