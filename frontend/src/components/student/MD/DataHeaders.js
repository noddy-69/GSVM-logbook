import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./DataHeaders.module.css";

const DataHeaders = ({
  className = "",
  propMinWidth,
  date,
  propMinWidth1,
  dDMMYYYY,
  propMinWidth2,
  dDMMYYYY1,
  propMinWidth3,
  dDMMYYYY2,
  propMinWidth4,
  dDMMYYYY3,
  propMinWidth5,
  dDMMYYYY4,
  propMinWidth6,
  dDMMYYYY5,
  propMinWidth7,
  dDMMYYYY6,
  propMinWidth8,
  dDMMYYYY7,
  propMinWidth9,
  dDMMYYYY8,
  propMinWidth10,
  dDMMYYYY9,
  propMinWidth11,
  dDMMYYYY10,
  propMinWidth12,
}) => {
  const dataHeadersStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const dateStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const dDMMYYYYStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const dDMMYYYY1Style = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const dDMMYYYY2Style = useMemo(() => {
    return {
      minWidth: propMinWidth4,
    };
  }, [propMinWidth4]);

  const dDMMYYYY3Style = useMemo(() => {
    return {
      minWidth: propMinWidth5,
    };
  }, [propMinWidth5]);

  const dDMMYYYY4Style = useMemo(() => {
    return {
      minWidth: propMinWidth6,
    };
  }, [propMinWidth6]);

  const dDMMYYYY5Style = useMemo(() => {
    return {
      minWidth: propMinWidth7,
    };
  }, [propMinWidth7]);

  const dDMMYYYY6Style = useMemo(() => {
    return {
      minWidth: propMinWidth8,
    };
  }, [propMinWidth8]);

  const dDMMYYYY7Style = useMemo(() => {
    return {
      minWidth: propMinWidth9,
    };
  }, [propMinWidth9]);

  const dDMMYYYY8Style = useMemo(() => {
    return {
      minWidth: propMinWidth10,
    };
  }, [propMinWidth10]);

  const dDMMYYYY9Style = useMemo(() => {
    return {
      minWidth: propMinWidth11,
    };
  }, [propMinWidth11]);

  const dDMMYYYY10Style = useMemo(() => {
    return {
      minWidth: propMinWidth12,
    };
  }, [propMinWidth12]);

  return (
    <div
      className={[styles.dataHeaders, className].join(" ")}
      style={dataHeadersStyle}
    >
      <div className={styles.headerLabels}>
        <div className={styles.date} style={dateStyle}>
          {date}
        </div>
        <div className={styles.headerDate}>
          <div className={styles.ddmmyyyy} style={dDMMYYYYStyle}>
            {dDMMYYYY}
          </div>
        </div>
      </div>
      <div className={styles.ddmmyyyyWrapper}>
        <div className={styles.ddmmyyyy} style={dDMMYYYY1Style}>
          {dDMMYYYY1}
        </div>
      </div>
      <div className={styles.ddmmyyyyWrapper}>
        <div className={styles.ddmmyyyy} style={dDMMYYYY2Style}>
          {dDMMYYYY2}
        </div>
      </div>
      <div className={styles.ddmmyyyyWrapper}>
        <div className={styles.ddmmyyyy} style={dDMMYYYY3Style}>
          {dDMMYYYY3}
        </div>
      </div>
      <div className={styles.ddmmyyyyWrapper}>
        <div className={styles.ddmmyyyy} style={dDMMYYYY4Style}>
          {dDMMYYYY4}
        </div>
      </div>
      <div className={styles.ddmmyyyyWrapper}>
        <div className={styles.ddmmyyyy} style={dDMMYYYY5Style}>
          {dDMMYYYY5}
        </div>
      </div>
      <div className={styles.ddmmyyyyWrapper}>
        <div className={styles.ddmmyyyy} style={dDMMYYYY6Style}>
          {dDMMYYYY6}
        </div>
      </div>
      <div className={styles.ddmmyyyyWrapper}>
        <div className={styles.ddmmyyyy} style={dDMMYYYY7Style}>
          {dDMMYYYY7}
        </div>
      </div>
      <div className={styles.ddmmyyyyWrapper}>
        <div className={styles.ddmmyyyy} style={dDMMYYYY8Style}>
          {dDMMYYYY8}
        </div>
      </div>
      <div className={styles.ddmmyyyyWrapper}>
        <div className={styles.ddmmyyyy} style={dDMMYYYY9Style}>
          {dDMMYYYY9}
        </div>
      </div>
      <div className={styles.ddmmyyyyWrapper}>
        <div className={styles.ddmmyyyy} style={dDMMYYYY10Style}>
          {dDMMYYYY10}
        </div>
      </div>
    </div>
  );
};

DataHeaders.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  dDMMYYYY: PropTypes.string,
  dDMMYYYY1: PropTypes.string,
  dDMMYYYY2: PropTypes.string,
  dDMMYYYY3: PropTypes.string,
  dDMMYYYY4: PropTypes.string,
  dDMMYYYY5: PropTypes.string,
  dDMMYYYY6: PropTypes.string,
  dDMMYYYY7: PropTypes.string,
  dDMMYYYY8: PropTypes.string,
  dDMMYYYY9: PropTypes.string,
  dDMMYYYY10: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propMinWidth4: PropTypes.any,
  propMinWidth5: PropTypes.any,
  propMinWidth6: PropTypes.any,
  propMinWidth7: PropTypes.any,
  propMinWidth8: PropTypes.any,
  propMinWidth9: PropTypes.any,
  propMinWidth10: PropTypes.any,
  propMinWidth11: PropTypes.any,
  propMinWidth12: PropTypes.any,
};

export default DataHeaders;
