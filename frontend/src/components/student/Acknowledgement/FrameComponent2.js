import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.yearSelectionInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.headingWrapper}>
          <h3 className={styles.heading}>Choose your year</h3>
        </div>
        <div className={styles.yearSelection}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.stYear}>1st Year</div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild} />
            <div className={styles.ndYear}>2nd Year</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.rdYear}>3rd Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
