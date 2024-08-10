import PropTypes from "prop-types";
import styles from "./LogoHeader.module.css";

const LogoHeader = ({ className = "", untitledDesign11 }) => {
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
      <div className={styles.pageHeading}>
        <h3 className={styles.heading}>G.S.V.M. Medical College, Kanpur</h3>
      </div>
    </header>
  );
};

LogoHeader.propTypes = {
  className: PropTypes.string,
  untitledDesign11: PropTypes.string,
};

export default LogoHeader;
