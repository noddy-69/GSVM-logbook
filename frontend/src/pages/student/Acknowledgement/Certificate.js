import NameInput from "../../../components/student/Acknowledgement/NameInput";
import Button from "../../../components/student/Acknowledgement/Button";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from "./Certificate.module.css";

const Certificate = () => {
  const [name1, setName1] = useState('');
  const [name, setName] = useState('');
  const [registration, setRegistration] = useState('');

  const handleCertificate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/certificateclick', { name1 });
      console.log(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/certificate')
      .then(response => {
        setName(response.data.name);
        setRegistration(response.data.registration);
        setName1(response.data.name1);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className={styles.certificate}>
      <header className={styles.mainContent}>
        <div className={styles.mainContentChild} />
        <div className={styles.logo}>
          <div className={styles.logoChild} />
          <img
            className={styles.untitledDesign11Icon}
            loading="lazy"
            alt=""
            src="/untitleddesign1-1@2x.png"
          />
        </div>
        <div className={styles.headingWrapper}>
          <h3 className={styles.heading}>G.S.V.M. Medical College, Kanpur</h3>
        </div>
      </header>
      <form onSubmit={handleCertificate} className={styles.departmentDetailsWrapper}>
        <section className={styles.departmentDetails}>
          <div className={styles.certificateTitle}>
            <div className={styles.titleContent}>
              <h1 className={styles.cER}>C E R T I F I C A T E</h1>
              <div className={styles.submissionDetails}>
                <div className={styles.submissionOfLogContainer}>
                  <p className={styles.submissionOfLog}>
                    Submission of Log Book for the award of MD in Pathology
                  </p>
                  <p className={styles.inBlankSpaces}>
                    (in blank spaces candidate has to fill his/her details)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.doctorInfo}>
            <h3 className={styles.thisIsTo}>
              This is to certify that Dr. __________________, MBBS, Specialty
              trainee for MD (Pathology), with Registration number ___________
              is hereby submitting his/her Log Book, which is the original work
              done by him/her under the guidance of Dr.
              ___________________________at  Department of Pathology, GSVM
              Medical College, Kanpur.  This has not been submitted to any other
              University or Board of Examinations, in part or full.
            </h3>
            <div className={styles.enterText}><input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={styles.textinput} required/></div>
            <div className={styles.enterText1}><input name="registration" type="text" value={registration} onChange={(e) => setRegistration(e.target.value)} className={styles.textinput1} required/></div>
            <div className={styles.enterText2}><input name="name1" type="text" value={name1} onChange={(e) => setName1(e.target.value)} className={styles.textinput2} required/></div>
          </div>
          <div className={styles.headDetails}>
            <h3 className={styles.guide}>Guide</h3>
            <div className={styles.name}>Name*</div>
            <div className={styles.textInput}>
              <input name="guide_name" type="text" className={styles.textinput3} readOnly/>
            </div>
            <div className={styles.name}>Designation*</div>
            <div className={styles.textInput}>
              <input name="guide_designation" type="text" className={styles.textinput3} readOnly/>
            </div>
          </div>
          <div className={styles.headDetails1}>
            <h3 className={styles.headOfThe}>Head of the Department</h3>
            <div className={styles.name}>Name*</div>
            <div className={styles.textInput}>
              <input name="head_name" type="text" className={styles.textinput3} readOnly/>
            </div>
            <div className={styles.name}>Designation*</div>
            <div className={styles.textInput}>
              <input name="head_designation" type="text" className={styles.textinput3} readOnly/>
            </div>
          </div>
          <div className={styles.instructions}>
            <div
              className={styles.pleaseFillAll}
            >{`*Please fill all the required fields `}</div>
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.signupButton}>Submit</button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Certificate;
