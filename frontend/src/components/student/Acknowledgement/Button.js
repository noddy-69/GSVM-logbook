import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ className = "", textLabel = "Submit" }) => {
  return (
    <div className={[styles.button, className].join(" ")}>
      <div className={styles.button1}>{textLabel}</div>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  textLabel: PropTypes.string,
};

export default Button;
