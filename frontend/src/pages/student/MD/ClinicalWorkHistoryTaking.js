import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./ClinicalWorkHistoryTaking.module.css";
import LogoHeader from "../../../components/student/MD/LogoHeader";

const ClinicalWorkHistoryTaking = () => {
  const [logbookfield, setLogbookfield] = useState('');
  const [subfield, setSubfield] = useState('');
  const [columnsToShow, setColumnsToShow] = useState([]);
  const [patients, setPatients] = useState([{ sno: 1, Date: '', Topic: '', Journal_details: '', Program: '', UHID_No: '', Comment: 'Value1', Procedure_Level: 'Value1', Diagnosis: '', Presentation_date: '', Moderator: '' }]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/clinical-work-historytaking')
      .then(response => {
        setLogbookfield(response.data.logbookfield);
        setSubfield(response.data.subfield);
        setColumnsToShow(response.data.columnsToShow || []);
        console.log(response.data)
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
                    <td className={styles.serial}>{patient.sno}</td>
                  )}
                  {columnsToShow.includes('Date') && (
                    <td>
                      <input
                        type="text"
                        name="Date"
                        placeholder="YYYY-MM-DD"
                        value={patient.Date}
                        onChange={(e) => handleInputChange(index, e)}
                        className={styles.inputField}
                      />
                    </td>
                  )}
                  {columnsToShow.includes('Topic') && (
                    <td>
                      <input
                        type="text"
                        name="Topic"
                        placeholder="Type here...."
                        value={patient.Topic}
                        onChange={(e) => handleInputChange(index, e)}
                        className={styles.inputField}
                      />
                    </td>
                  )}
                  {columnsToShow.includes('Journal_details') && (
                    <td>
                      <input
                        type="text"
                        name="Journal_details"
                        placeholder="Type here...."
                        value={patient.Journal_details}
                        onChange={(e) => handleInputChange(index, e)}
                        className={styles.inputField}
                      />
                    </td>
                  )}
                  {columnsToShow.includes('Program') && (
                    <td>
                      <select name="Program" className={styles.inputField3} value={patient.Program} onChange={(e) => handleInputChange(index, e)} required>
                        <option value="Value1">Value1</option>
                        <option value="Value2">Value2</option>
                      </select>
                    </td>
                  )}
                  {columnsToShow.includes('UHID_No') && (
                    <td>
                      <input
                        type="number"
                        name="UHID_No"
                        placeholder="xx02912xx"
                        value={patient.UHID_No}
                        onChange={(e) => handleInputChange(index, e)}
                        className={styles.inputField1}
                      />
                    </td>
                  )}
                  {columnsToShow.includes('Comment') && (
                    <td>
                      <select name="Comment" className={styles.inputField3} value={patient.Comment} onChange={(e) => handleInputChange(index, e)} required>
                        <option value="Value1">Value1</option>
                        <option value="Value2">Value2</option>
                      </select>
                    </td>
                  )}
                  {columnsToShow.includes('Procedure_Level') && (
                    <td>
                      <select name="Procedure_Level" className={styles.inputField3} value={patient.Procedure_Level} onChange={(e) => handleInputChange(index, e)} required>
                        <option value="Value1">Value1</option>
                        <option value="Value2">Value2</option>
                      </select>
                    </td>
                  )}
                  {columnsToShow.includes('Diagnosis') && (
                    <td>
                      <input
                        type="text"
                        name="Diagnosis"
                        placeholder="Type here..."
                        value={patient.Diagnosis}
                        onChange={(e) => handleInputChange(index, e)}
                        className={styles.inputField2}
                      />
                      <div className={styles.max}>
                        *Maximum 50 words
                      </div>
                    </td>
                  )}
                  {columnsToShow.includes('Presentation_date') && (
                    <td>
                      <input
                        type="text"
                        name="Presentation_date"
                        placeholder="YYYY-MM-DD"
                        value={patient.Presentation_Date}
                        onChange={(e) => handleInputChange(index, e)}
                        className={styles.inputField}
                      />
                    </td>
                  )}
                  {columnsToShow.includes('Moderator') && (
                    <td>
                      <input
                        type="text"
                        name="Moderator"
                        placeholder="Type here...."
                        value={patient.Moderator}
                        onChange={(e) => handleInputChange(index, e)}
                        className={styles.inputField}
                      />
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
