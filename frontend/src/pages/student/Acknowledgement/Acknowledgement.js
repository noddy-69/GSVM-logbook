import FrameComponent from "../../../components/student/Acknowledgement/FrameComponent";
import FrameComponent1 from "../../../components/student/Acknowledgement/FrameComponent1";
import Button from "../../../components/student/Acknowledgement/Button";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from "./Acknowledgement.module.css";

const Acknowledgement = () => {
  function updateCharacterCount() {
    const textarea = document.getElementById('textarea');
    const charCountDisplay = document.getElementById('char-count');
    const maxChars = 500;
    const currentChars = textarea.value.length;
  
    charCountDisplay.textContent = `${currentChars}/${maxChars}`;
    
    // Prevent further input if the character limit is reached
    if (currentChars >= maxChars) {
      textarea.value = textarea.value.substring(0, maxChars);
    }
  }

  const [acknowledgement, setAcknowledgement] = useState('');

  const handleAcknowledgement = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/acknowledgementclick', { acknowledgement });
      console.log(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/acknowledgement')
      .then(response => {
        setAcknowledgement(response.data.acknowledgement);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className={styles.acknowledgement}>
      <FrameComponent untitledDesign11="/untitleddesign1-1@2x.png" />
      <form onSubmit={handleAcknowledgement}>
      <main className={styles.acknowledgementInner}>
        <section className={styles.acknowledgementContentParent}>
          <div className={styles.acknowledgementContent}>
            <div className={styles.aCKNOWLEDGEMENTParent}>
              <h1 className={styles.aCK}>A C K N O W L E D G E M E N T</h1>
              <div className={styles.toBeWrittenByTheCandidateWrapper}>
                <div className={styles.toBeWritten}>
                  (TO BE WRITTEN BY THE CANDIDATE ACKNOLEDGING THE CONTRIBUTION
                  OF THE DEPARTMENT IN HIS/HER PROFESSIONAL DEVELOPMENT)
                </div>
              </div>
            </div>
          </div>
          <div className={styles.textarea_container}>
            <textarea className={styles.textarea} name="acknowledgement" id="textarea" value={acknowledgement} onChange={(e) => setAcknowledgement(e.target.value)} placeholder="Type here...." onInput={updateCharacterCount} maxLength={500} rows={400}></textarea>
            <div className={styles.signaturePlaceholderParent}>
              <div id="char-count" className={styles.signaturePlaceholder}>0 / 500</div>
            </div>
          </div>
          
        </section>
      </main>
      <button type="submit" className={styles.signupButton}>Submit</button>
    </form>
    </div>
  );
};

export default Acknowledgement;
