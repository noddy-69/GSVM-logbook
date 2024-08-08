import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "", untitledDesign11 }) => {
  return (
    <header className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
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
        <b className={styles.heading}>G.S.V.M. Medical College, Kanpur</b>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  untitledDesign11: PropTypes.string,
};

export default FrameComponent;
