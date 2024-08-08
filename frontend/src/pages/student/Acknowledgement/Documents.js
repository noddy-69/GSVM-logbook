import FrameComponent from "../../../components/student/Acknowledgement/FrameComponent";
import FrameComponent3 from "../../../components/student/Acknowledgement/FrameComponent3";
import styles from "./Documents.module.css";

const Documents = () => {
  return (
    <div className={styles.documents}>
      <FrameComponent untitledDesign11="/untitleddesign1-1@2x.png" />
      <FrameComponent3 />
      <div className={styles.documentsInner}>
        <a href="/year-selection" className={styles.year}>
        <div className={styles.skipParent}>
          <div className={styles.skip}>Skip</div>
          <img
            className={styles.iconChevronDown}
            loading="lazy"
            alt=""
            src="/icon--chevron-down@2x.png"
          />
        </div>
        </a>
      </div>
    </div>
  );
};

export default Documents;
