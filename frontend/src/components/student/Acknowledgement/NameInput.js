import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./NameInput.module.css";

const NameInput = ({ className = "", propPadding, name1, propWidth }) => {
  const nameInputStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const placeholderStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.nameInput, className].join(" ")}
      style={nameInputStyle}
    >
      <div className={styles.name}>{name1}</div>
      <div className={styles.textInput}>
        <input name="name" type="text" className={styles.textinput} required/>
      </div>
    </div>
  );
};

NameInput.propTypes = {
  className: PropTypes.string,
  name1: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
};

export default NameInput;
