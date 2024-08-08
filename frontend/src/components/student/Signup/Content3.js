import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styles from "./Content3.module.css";

const Content3 = ({ className = "" }) => {
  const [digit1, setDigit1] = useState('');
  const [digit2, setDigit2] = useState('');
  const [digit3, setDigit3] = useState('');
  const [digit4, setDigit4] = useState('');
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const digit4Ref = useRef(null);

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timerInterval.current);
    }
  }, [timer]);

  const timerInterval = useRef(null);

  const startTimer = () => {
    setTimer(30);
    clearInterval(timerInterval.current);
    timerInterval.current = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
  };

  const handleInputChange = (e, setDigit, nextRef) => {
    const { value } = e.target;
    if (value.length === 1 && nextRef) {
      nextRef.current.focus();
    }
    setDigit(value);
  };

  const handleSubmit4 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/verificationclick', { digit1, digit2, digit3, digit4 });
      console.log(response.data);
      if (response.data === "Yes" && timer > 0) {
        navigate('/new-password');
      } else {
        console.log("wrong-otp");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClick = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/resendcode');
      console.log(response.data);
      setDigit1('');
      setDigit2('');
      setDigit3('');
      setDigit4('');
      startTimer(); // Restart the timer when resend is clicked
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };

  return (
    <section className={[styles.content, className].join(" ")}>
      <form onSubmit={handleSubmit4} className={styles.formContainer}>
        <div className={styles.form}>
          <div className={styles.headingWrapper}>
            <b className={styles.heading}>Verification</b>
          </div>
          <div className={styles.inputField}>
            <div className={styles.inputWrapper}>
              <div className={styles.placeholder}>
                Enter your 4 digits code that you received on your email.
              </div>
            </div>
            <div className={styles.verification}>
              <div className={styles.verificationCode}>
                <div className={styles.codeBlocks}>
                  <div className={styles.codeBlockRowParent}>
                    <input
                      name="digit1"
                      type="text"
                      className={styles.textinput}
                      value={digit1}
                      onChange={(e) => handleInputChange(e, setDigit1, digit2Ref)}
                      ref={digit1Ref}
                      maxLength="1"
                      required
                    />
                    <input
                      name="digit2"
                      type="text"
                      className={styles.textinput}
                      value={digit2}
                      onChange={(e) => handleInputChange(e, setDigit2, digit3Ref)}
                      ref={digit2Ref}
                      maxLength="1"
                      required
                    />
                    <input
                      name="digit3"
                      type="text"
                      className={styles.textinput}
                      value={digit3}
                      onChange={(e) => handleInputChange(e, setDigit3, digit4Ref)}
                      ref={digit3Ref}
                      maxLength="1"
                      required
                    />
                    <input
                      name="digit4"
                      type="text"
                      className={styles.textinput}
                      value={digit4}
                      onChange={(e) => handleInputChange(e, setDigit4, null)}
                      ref={digit4Ref}
                      maxLength="1"
                      required
                    />
                  </div>
                  <div className={styles.codeDescription}>{`00:${timer < 10 ? `0${timer}` : timer}`}</div>
                </div>
              </div>
              <button type="submit" className={styles.signupButton}>Verify</button>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.text}>
              <span>{`If you didn’t receive a code! `}</span>
              <span onClick={handleClick} className={styles.resend}>Resend</span>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

Content3.propTypes = {
  className: PropTypes.string,
};

export default Content3;
