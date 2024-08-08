import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styles from "./Content1.module.css";

const Content1 = ({ className = "" }) => {
  const [pass, setPass] = useState('');
  const [pass1, setPass1] = useState('');
  const navigate = useNavigate();

  const handleSubmit5 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/updateclick', { pass, pass1 });
      console.log(response.data);
      navigate('/success');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.passwordInputParent}>
        <div className={styles.passwordInput}>
          <div className={styles.passwordFields}>
            <div className={styles.newPassword}>
              <h1 className={styles.heading}>New Password</h1>
            </div>
            <div className={styles.newPasswordDescription}>
              Set the new password for your account so you can login and access
              all featuress.
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit5} className={styles.confirmPassword}>
          <div className={styles.passwordRules}>
            <div className={styles.enterNewPassword}>Enter new password*</div>
              <input name="pass" type="password" className={styles.textinput} onChange={(e) => setPass(e.target.value)} required />
          </div>
          <div className={styles.passwordRules1}>
            <div className={styles.confirmPassword1}>Confirm password*</div>
              <input name="pass1" type="password" className={styles.textinput} onChange={(e) => setPass1(e.target.value)} required />
          </div>
          <button type="submit" className={styles.signupButton}>Continue</button>
        </form>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
