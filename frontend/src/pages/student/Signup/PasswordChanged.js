import FrameComponent from "../../../components/student/Signup/FrameComponent";
import Successful from "../../../components/student/Signup/successful";
import styles from "./PasswordChanged.module.css";

const PasswordChanged = () => {
  return (
    <div className={styles.passwordChanged}>
      <FrameComponent />
      <Successful />
    </div>
  );
};

export default PasswordChanged;
