import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./InputFields1.module.css";

const InputFields1 = ({ className = "", name1, propPadding }) => {
  const inputFieldsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.inputFields, className].join(" ")}
      style={inputFieldsStyle}
    >
      <div className={styles.name}>{name1}</div>
      <div className={styles.dateInput}>
        <div className={styles.dateInputChild} />
      </div>
    </div>
  );
};

InputFields1.propTypes = {
  className: PropTypes.string,
  name1: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default InputFields1;
