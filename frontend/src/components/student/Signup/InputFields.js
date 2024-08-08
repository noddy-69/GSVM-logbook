import PropTypes from "prop-types";
import styles from "./InputFields.module.css";

const InputFields = ({ className = "", yearOfAdmission, dropdown }) => {
  return (
    <div className={[styles.inputFields, className].join(" ")}>
      <div className={styles.yearOfAdmission}>{yearOfAdmission}</div>
      <div className={styles.datePlaceholderWrapper}>
        <div className={styles.datePlaceholder}>
          <div className={styles.dropdown}>{dropdown}</div>
          <img
            className={styles.iconChevronDown}
            alt=""
            src="/icon--chevron-down.svg"
          />
        </div>
      </div>
    </div>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
  yearOfAdmission: PropTypes.string,
  dropdown: PropTypes.string,
};

export default InputFields;
