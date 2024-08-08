import FrameComponent from "../../../components/student/Acknowledgement/FrameComponent";
import FrameComponent1 from "../../../components/student/Acknowledgement/FrameComponent1";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from "./Introduction.module.css";

const Introduction = () => {
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

  const [introduction, setIntroduction] = useState('');

  const handleIntroduction = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/introductionclick', { introduction });
      console.log(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/introduction')
      .then(response => {
        setIntroduction(response.data.introduction);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div className={styles.introduction}>
      <FrameComponent untitledDesign11="/untitleddesign1-1@2x.png" />
      <form onSubmit={handleIntroduction}>
      <main className={styles.introductionInner}>
        <section className={styles.introductionContainerParent}>
          <div className={styles.introductionContainer}>
            <div className={styles.frameParent}>
              <div className={styles.iNTRODUCTIONWrapper}>
                <h1 className={styles.iNT}>I N T R O D U C T I O N</h1>
              </div>
              <div className={styles.describeInBrief}>
                Describe in brief as bullets about the diagnostic facilities
                (histopathology, cytopathology, hematology and biochemistry)
                offered by the department and the training received during your
                stay in the deapartment
              </div>
            </div>
          </div>
          <div className={styles.textarea_container}>
            <textarea className={styles.textarea} id="textarea" name="introduction" value={introduction} onChange={(e) => setIntroduction(e.target.value)} placeholder="Type here...." onInput={updateCharacterCount} maxLength={500} rows={400}></textarea>
          </div>
          <div className={styles.buttonDescriptionParent}>
            <div id="char-count" className={styles.buttonDescription}>0 / 500</div>
            <button type="submit" className={styles.signupButton}>Submit</button>
          </div>
        </section>
      </main>
      </form>  
    </div>
  );
};

export default Introduction;
