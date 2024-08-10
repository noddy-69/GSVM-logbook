import Content from "../../../components/student/MD/Content";
import styles from "./LogbookField.module.css";

const LogbookField = () => {
  return (
    <div className={styles.yearSelection}>
      <header className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.logo}>
          <div className={styles.logoChild} />
          <img
            className={styles.untitledDesign11Icon}
            loading="lazy"
            alt=""
            src="/untitleddesign1-11@2x.png"
          />
        </div>
        <div className={styles.headingWrapper}>
          <b className={styles.heading}>G.S.V.M. Medical College, Kanpur</b>
        </div>
      </header>
      <Content />
    </div>
  );
};

export default LogbookField;
