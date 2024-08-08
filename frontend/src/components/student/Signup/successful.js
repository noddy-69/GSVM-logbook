import PropTypes from "prop-types";
import styles from "./successful.module.css";

const Successful = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.animationWrapperParent}>
        <div className={styles.animationWrapper}>
          <img
            className={styles.componentlottiehttpsassetIcon}
            loading="lazy"
            alt=""
            src="/componentlottiehttpsassets1lottiefilescompackageslf20-t6eeo9z1json.svg"
          />
        </div>
        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>Successfull</h1>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.textWrapper}>
            <div className={styles.text}>
              Your password has been reset successfully
            </div>
          </div>
          <a href="/login" className={styles.continueLink}>
          <div className={styles.continueButton}>
            <div className={styles.continue}>Continue</div>
          </div>
          </a>
        </div>
      </div>
    </section>
  );
};

Successful.propTypes = {
  className: PropTypes.string,
};

export default Successful;
