import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from "./ClinicalWorkHistoryTaking.module.css";
import LogoHeader from "../../../components/student/MD/LogoHeader";

const ClinicalWorkHistoryTaking = () => {
  const [logbookfield, setLogbookfield] = useState('');
  const [subfield, setSubfield] = useState('');
  const [columnsToShow, setColumnsToShow] = useState([]);
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/clinical-work-general-physical-examination')
      .then(response => {
        console.log(response.data); // Inspect the API response
        setLogbookfield(response.data.logbookfield);
        setSubfield(response.data.subfield);
        setColumnsToShow(response.data.columnsToShow || []);
        setPatients(response.data.patients_items || []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addPatientRow = () => {
    setPatients([...patients, { sno: patients.length + 1, Date: '', Topic: '', Journal_details: '', Program: '', UHID_No: '', Comment: 'Value1', Procedure_Level: 'Value1', Diagnosis: '', Presentation_date: '', Moderator: '' }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newPatients = patients.map((patient, i) => {
      if (i === index) {
        return { ...patient, [name]: value };
      }
      return patient;
    });
    setPatients(newPatients);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/add-patients', { patients });
      console.log(response.data);
      navigate('/clinical-work-general-physical-examination');
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
            <h1 className={styles.heading}>{logbookfield} - {subfield}</h1>
            <div className={styles.writeDownThe}>
              Write down the details of patients whose history has been taken by
              you and presented before consultant. A minimum of 100 cases are to
              be recorded.
            </div>
          </div>
          <table className={styles.table}>
            <thead className={styles.tablehead}>
              <tr>
                {columnsToShow.includes('S.NO.') && <th>S.NO.</th>}
                {columnsToShow.includes('Date') && <th>Date</th>}
                {columnsToShow.includes('Topic') && <th>Topic</th>}
                {columnsToShow.includes('Journal_details') && <th>Journal details</th>}
                {columnsToShow.includes('Program') && <th>Program</th>}
                {columnsToShow.includes('UHID_No') && <th>UHID No</th>}
                {columnsToShow.includes('Comment') && <th>Comment</th>}
                {columnsToShow.includes('Procedure_Level') && <th>Procedure Level</th>}
                {columnsToShow.includes('Diagnosis') && <th>Diagnosis</th>}
                {columnsToShow.includes('Presentation_date') && <th>Presentation Date</th>}
                {columnsToShow.includes('Moderator') && <th>Moderator</th>}
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  {columnsToShow.includes('S.NO.') && (
                    <td className={styles.serial}>{index + 1}</td>
                  )}
                  {columnsToShow.includes('Date') && (
                    <td>
                      {patient.Date}
                    </td>
                  )}
                  {columnsToShow.includes('Topic') && (
                    <td>
                      {patient.Topic}
                    </td>
                  )}
                  {columnsToShow.includes('Journal_details') && (
                    <td>
                      {patient.Journal_details}
                    </td>
                  )}
                  {columnsToShow.includes('Program') && (
                    <td>
                      {patient.Program}
                    </td>
                  )}
                  {columnsToShow.includes('UHID_No') && (
                    <td>
                      {patient.UHID_No}
                    </td>
                  )}
                  {columnsToShow.includes('Comment') && (
                    <td>
                      {patient.Comment}
                    </td>
                  )}
                  {columnsToShow.includes('Procedure_Level') && (
                    <td>
                      {patient.Procedure_Level}
                    </td>
                  )}
                  {columnsToShow.includes('Diagnosis') && (
                    <td>
                      {patient.Diagnosis}
                    </td>
                  )}
                  {columnsToShow.includes('Presentation_date') && (
                    <td>
                      {patient.Presentation_Date}
                    </td>
                  )}
                  {columnsToShow.includes('Moderator') && (
                    <td>
                      {patient.Moderator}
                    </td>
                  )}
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
