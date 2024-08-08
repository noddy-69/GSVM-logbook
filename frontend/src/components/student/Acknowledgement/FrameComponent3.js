import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.documentsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.headingWrapper}>
          <h3 className={styles.heading}>Fill necessary documents</h3>
        </div>
        <div className={styles.frameGroup}>
          <a href="/certificate" className={styles.link}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.certificate}>Certificate</div>
          </div>
          </a>
          <a href="/acknowledgement" className={styles.link}>
          <div className={styles.acknowledgementParent}>
            <div className={styles.acknowledgement}>Acknowledgement</div>
            <div className={styles.frameChild} />
          </div>
          </a>
          <a href="/introduction" className={styles.link}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild} />
            <div className={styles.introduction}>Introduction</div>
          </div>
          </a>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
