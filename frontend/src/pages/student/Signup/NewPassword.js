import LogoHeader from "../../../components/student/Signup/LogoHeader";
import Content1 from "../../../components/student/Signup/Content1";
import styles from "./NewPassword.module.css";

const NewPassword = () => {
  return (
    <div className={styles.newPassword}>
      <LogoHeader
        untitledDesign11="/untitleddesign1-11@2x.png"
        alreadyHaveAnAccount="Don't have an account?"
        logIn="Sign Up"
      />
      <Content1 />
    </div>
  );
};

export default NewPassword;
