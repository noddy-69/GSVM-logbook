import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  className = "",
  textLabel = "Back",
  propBackgroundColor,
  propHeight,
  propBorder,
  propMinWidth,
  propColor,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      height: propHeight,
      border: propBorder,
    };
  }, [propBackgroundColor, propHeight, propBorder]);

  const button1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
      color: propColor,
    };
  }, [propMinWidth, propColor]);

  return (
    <div className={[styles.button, className].join(" ")} style={buttonStyle}>
      <div className={styles.button1} style={button1Style}>
        {textLabel}
      </div>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  textLabel: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propHeight: PropTypes.any,
  propBorder: PropTypes.any,
  propMinWidth: PropTypes.any,
  propColor: PropTypes.any,
};

export default Button;
