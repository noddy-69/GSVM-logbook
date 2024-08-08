import FrameComponent from "../../../components/student/Acknowledgement/FrameComponent";
import FrameComponent2 from "../../../components/student/Acknowledgement/FrameComponent2";
import styles from "./YearSelection.module.css";

const YearSelection = () => {
  return (
    <div className={styles.yearSelection}>
      <FrameComponent untitledDesign11="/untitleddesign1-11@2x.png" />
      <FrameComponent2 />
    </div>
  );
};

export default YearSelection;
