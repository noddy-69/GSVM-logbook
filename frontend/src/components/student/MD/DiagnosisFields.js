import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./DiagnosisFields.module.css";

const DiagnosisFields = ({ className = "", propPadding }) => {
  const diagnosisFieldsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.diagnosisFields, className].join(" ")}
      style={diagnosisFieldsStyle}
    >
      <div className={styles.diagnosisInputs}>
        <div className={styles.typeHere}>Type here...</div>
      </div>
      <div className={styles.maximum50Words}>{`*Maximum 50 words `}</div>
    </div>
  );
};

DiagnosisFields.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default DiagnosisFields;
