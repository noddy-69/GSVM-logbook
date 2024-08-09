import PropTypes from "prop-types";
import styles from "./LogoHeader.module.css";

const LogoHeader = ({
  className = "",
  untitledDesign11,
  alreadyHaveAnAccount,
  logIn,
}) => {
  return (
    <header className={[styles.logoHeader, className].join(" ")}>
      <div className={styles.logoHeaderChild} />
      <div className={styles.logo}>
        <div className={styles.logoChild} />
        <img
          className={styles.untitledDesign11Icon}
          loading="lazy"
          alt=""
          src={untitledDesign11}
        />
      </div>
      <div className={styles.headingWrapper}>
        <h3 className={styles.heading}>G.S.V.M. Medical College, Kanpur</h3>
      </div>
      <div className={styles.loginLink}>
        <div className={styles.alreadyHaveAnAccountParent}>
          <div className={styles.alreadyHaveAn}>{alreadyHaveAnAccount}</div>
          <a href="/login"><div className={styles.logIn}>{logIn}</div></a>
        </div>
      </div>
    </header>
  );
};

LogoHeader.propTypes = {
  className: PropTypes.string,
  untitledDesign11: PropTypes.string,
  alreadyHaveAnAccount: PropTypes.string,
  logIn: PropTypes.string,
};

export default LogoHeader;
