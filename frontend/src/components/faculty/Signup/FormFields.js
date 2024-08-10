import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import styles from "./FormFields.module.css";
import axios from "axios";

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const navigate = useNavigate();

  const handlefacultysignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/facultysignupclick', { name, email, password, department, designation });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  return (
    <form onSubmit={handlefacultysignup} className={styles.formFields}>
      <div className={styles.submission}>
        <div className={styles.terms}>
          <div className={styles.termsContent}>
            <h1 className={styles.heading}>Sign Up</h1>
          </div>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet adipiscing elit.
          </div>
        </div>
      </div>
      <div className={styles.inputFields}>
        <div className={styles.textlabel}>Name*</div>
        <input name="name" type="text" className={styles.textinput} onChange={(e) => setName(e.target.value)} required/>
      </div>
      <div className={styles.inputFields}>
        <div className={styles.textlabel}>Email*</div>
        <input name="email" type="email" className={styles.textinput} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className={styles.inputFields}>
        <div className={styles.textlabel}>Password*</div>
        <input name="password" type="password" className={styles.textinput} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className={styles.inputFields}>
        <div className={styles.textlabel}>Department*</div>
        <select name="department" id="language1" onChange={(e) => setDepartment(e.target.value)} required>
          <option value="Select one">Select one...</option>
          <option value="medical">Medical</option>
          <option value="humanities">Humanities</option>
          <option value="neurology">Neurology</option>
          <option value="orthopaedic">Orthopaedic</option>
          <option value="physician">Physician</option>
        </select>
      </div>
      <div className={styles.inputFields}>
        <div className={styles.textlabel}>Designation*</div>
        <select name="year" id="language" onChange={(e) => setDesignation(e.target.value)} required>
          <option value="Select Year">Select year</option>
          <option value="hod">HOD</option>
          <option value="professor">Professor</option>
          <option value="ta">TA</option>
          <option value="lab assistant">Lab Assistant</option>
        </select>
      </div>
      <button type="submit" className={styles.signupButton}>Sign Up</button>
    </form>
  );
};

SignupForm.propTypes = {
  className: PropTypes.string,
};

export default SignupForm ;