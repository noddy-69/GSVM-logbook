import InputFields1 from "./InputFields1";
import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styles from "./Content2.module.css";

const Content2 = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/forgotpasswordclick', { email });
      console.log(response.data);
      if (response.data != 'Email not found') {
        navigate('/verification');
      }
      else {
        console.log("wrong email");
      }    
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className={styles.content}>
      <form onSubmit={handleSubmit3} className={styles.formContainer}>
        <div className={styles.emailForm}>
          <h1 className={styles.heading}>Forgot Password</h1>
        </div>
        <div className={styles.formDescription}>
          <div className={styles.text}>
            Enter your email for the verification proccess, we will send 4
            digits code to your email.
          </div>
        </div>
        <div className={styles.textlabel}>Email*</div>
        <input name="email" type="email" className={styles.textinput} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit" className={styles.signupButton}>Continue</button>
      </form>
    </section>
  );
};

Content2.propTypes = {
  className: PropTypes.string,
};

export default Content2;
