import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  className = "",
  propBorderRadius,
  propBorderRadius1,
}) => {
  const inputFieldStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const rectangleDivStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius1,
    };
  }, [propBorderRadius1]);

  return (
    <div className={[styles.inputFieldWrapper, className].join(" ")}>
      <div className={styles.inputField} style={inputFieldStyle}>
        <div className={styles.inputFieldChild} style={rectangleDivStyle} />
        <div className={styles.typeHere}>
          <div className={styles.typeHere1}>Type here....</div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/line-1.svg" />
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/line-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
  propBorderRadius1: PropTypes.any,
};

export default FrameComponent1;
