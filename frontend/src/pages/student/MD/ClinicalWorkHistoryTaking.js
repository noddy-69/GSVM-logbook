import LogoHeader from "../../../components/student/MD/LogoHeader";
import DataHeaders from "../../../components/student/MD/DataHeaders";
import DiagnosisFields from "../../../components/student/MD/DiagnosisFields";
import Button from "../../../components/student/MD/Button";
import styles from "./ClinicalWorkHistoryTaking.module.css";
import axios from "axios";
import React, { useState, useEffect } from 'react'

const ClinicalWorkHistoryTaking = () => {
  const [logbookfield, setLogbookfield] = useState('');
  const [subfield, setSubfield] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/clinical-work-historytaking')
      .then(response => {
        setLogbookfield(response.data.logbookfield);
        setSubfield(response.data.subfield);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [patients, setPatients] = useState([{ sno: 1, date: '', uhid: '', diagnosis: '' }]);

  const addPatientRow = () => {
    setPatients([...patients, { sno: patients.length + 1, date: '', uhid: '', diagnosis: '' }]);
  };

  const handleInputChange = (index, event) => {
    const newPatients = patients.map((patient, i) => {
      if (i === index) {
        return { ...patient, [event.target.name]: event.target.value };
      }
      return patient;
    });
    setPatients(newPatients);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://127.0.0.1:5000/add-patients', { patients });
      alert('Patients data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className={styles.clinicalWorkHistoryTaking}>
      <LogoHeader untitledDesign11="/untitleddesign1-11@2x.png" />
      <main className={styles.patientHistory}>
        <section className={styles.historyInstructions}>
          <div className={styles.headingParent}>
            <h1 className={styles.heading}>{logbookfield} - {subfield}</h1> {/* Display logbookfield value */}
            <div className={styles.writeDownThe}>
              Write down the details of patients whose history has been taken by
              you and presented before consultant. A minimum of 100 cases are to
              be recorded.
            </div>
          </div>
          <table className={styles.table}>
            <thead className={styles.tablehead}>
              <tr>
                <th>S.NO.</th>
                <th>Date</th>
                <th>UHID No</th>
                <th>Diagnosis</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td className={styles.serial}>{patient.sno}</td>
                  <td>
                    <input
                      type="text"
                      name="date"
                      placeholder="YYYY-MM-DD"
                      value={patient.date}
                      onChange={(e) => handleInputChange(index, e)}
                      className={styles.inputField}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="uhid"
                      placeholder="xx02912xx"
                      value={patient.uhid}
                      onChange={(e) => handleInputChange(index, e)}
                      className={styles.inputField1}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="diagnosis"
                      placeholder="Type here..."
                      value={patient.diagnosis}
                      onChange={(e) => handleInputChange(index, e)}
                      className={styles.inputField2}
                    />
                    <div className={styles.max}>
                    *Maximum 50 words
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </section>
        
      </main>
      <div className={styles.buttonContainer}>
          <div className={styles.actionButtons}>
          
            <button onClick={addPatientRow} className={styles.button1}>Add Patient</button>
            <button onClick={handleSubmit} className={styles.button}>Submit</button>
           
          </div>
        </div>
    </div>
  );
};

export default ClinicalWorkHistoryTaking;
