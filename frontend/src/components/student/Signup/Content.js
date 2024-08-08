import InputFields1 from "./InputFields1";
import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Content.module.css";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/loginclick', { email, password });
      console.log(response.data);
      if (response.data == 'Yes') {
        navigate('/documents');
      }
      else {
        console.log("wrong email");
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  // useEffect(() => {
  //   // Function to fetch data
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("http://127.0.0.1:5000/loginclick");
  //       console.log(res.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); 

  return (
    <section className={styles.content}>
      <form onSubmit={handleSubmit2} className={styles.loginForm}>
        <div className={styles.emailLabel}>
          <h1 className={styles.heading}>Log In</h1>
        </div>
        <div className={styles.emailInput}>
          <div className={styles.emailPlaceholder}>
            Lorem ipsum dolor sit amet adipiscing elit.
          </div>
        </div>
        <div className={styles.textlabel}>Email*</div>
        <input name="email" type="email" className={styles.textinput} onChange={(e) => setEmail(e.target.value)} required />
        <div className={styles.textlabel}>Password*</div>
        <input name="password" type="password" className={styles.textinput} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className={styles.signupButton}>Log In</button>
        <div className={styles.forgotPassword}>
          <a href="forgot-password"><div className={styles.forgotYourPassword}>Forgot your password?</div></a>
        </div>
      </form>
    </section>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
};

export default LoginForm;
